import React from "react";
import { Link } from "react-router-dom";
import data from "../data/user_data.json";
import ButtonFirst from '../images/first-page.png';
import ButtonPrevious from '../images/previous-page.png';
import ButtonNext from '../images/next-page.png';
import ButtonLast from '../images/last-page.png';

const totalRecord = data.length;
const totalPageCount = (totalRecord / 10);
console.log('totalPageCount : ', totalPageCount);

const images = [
  "https://robohash.org/doloreestcorporis.png?size=40x40&set=set1",
  "https://robohash.org/maioresautemvitae.png?size=40x40&set=set1",
  "https://robohash.org/magniofficiisquod.png?size=40x40&set=set1",
  "https://robohash.org/inciduntexea.png?size=40x40&set=set1",
  "https://robohash.org/voluptatemquidemadipisci.png?size=40x40&set=set1",
  "https://robohash.org/reiciendiscupiditateipsa.png?size=40x40&set=set1",
  "https://robohash.org/cumminimaaut.png?size=40x40&set=set1",
  "https://robohash.org/eaconsequunturoptio.png?size=40x40&set=set1",
  "https://robohash.org/possimusrecusandaenesciunt.png?size=40x40&set=set1",
  "https://robohash.org/dolorumautemrerum.png?size=40x40&set=set1"
];

const Pagination = (props) => {
  let from = 0;
  let until = 0;
  function renderUser() {
    console.log(" ==> " , props.currentPageNumber);
    let currentPage = props.currentPageNumber;
    from = ((currentPage - 1) * 10);
    until = (currentPage * 10);
    console.log('currentPage : ' + currentPage + ' :: from : ' + from + " :: until : " + until);
    let userSet = data.slice(from, until);

    return userSet.map(user => {
      const { id, firstName, lastName, avatar } = user;
      return (
        <Link key={id} to={`/user/${id}`} className="displayFlexRow userPost">
          <div className="displayFlexColumn">
            <img src={avatar} alt="image" />
          </div>
          <div className="displayFlexColumn">
            {firstName} {lastName}
          </div>
        </Link>
      );
    });
  }

  function getUserDetails(event) {
    let id = event.target.id;
    console.log("name : ", id);
  }

  function getPageRecord() {
    let currentPage =  props.currentPageNumber;
    let untilRecord = (10 * props.currentPageNumber);
    let fromRecord = (currentPage - 1) === 0 ? 1 : (((currentPage - 1) * 10) + 1);
    return (
      <div className="displayFlexRow">
        <label className="resultLabel">
            {fromRecord} - {untilRecord} | {totalRecord} records
        </label>
      </div>
    );
  }

    return (
      <div>
        <div className="displayFlexRow">
          <div className = "displayFlexRow inputDiv margin5px">
            <input type="text" placeholder="Enter Text to Search..."/>
          </div>
        </div>
        <div className="displayFlexRow">
          {getPageRecord()}
        </div>
        <div>{renderUser()}</div>
        <div className = "displayFlexRowRight">
            <button className="margin5px" onClick={() => {
                props.firstPageAction(1)}}><img className="imageWidth imageAlignment" src={ButtonFirst} alt="First Page" /></button>
            <button className="margin5px" onClick={() => {
                props.previousPageAction(1)}}> <img className="imageWidth imageAlignment" src={ButtonPrevious} alt="Previous Page" /> </button>
            <button className="margin5px" onClick={() => {
                props.nextPageAction(1)}}> <img className="imageWidth imageAlignment" src={ButtonNext} alt="Next Page" /> </button>
            <button className="margin5px" onClick={() => {
                props.lastPageAction(totalPageCount)}}> <img className="imageWidth imageAlignment" src={ButtonLast} alt="Last Page" /> </button>
          </div>
      </div>
    );
}

export default Pagination;

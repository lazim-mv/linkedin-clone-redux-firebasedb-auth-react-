import React from 'react'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';


function Widgets() {

    const newsArticle = (heading,subtitle) => {
        return (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordOutlinedIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    }

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoOutlinedIcon />
        </div>
        {newsArticle("Learn React", "Top course - 10000 enrollment")}
        {newsArticle("Learn React", "Top course - 10000 enrollment")}
        {newsArticle("Learn React", "Top course - 10000 enrollment")}
        {newsArticle("Learn React", "Top course - 10000 enrollment")}
        {newsArticle("Learn React", "Top course - 10000 enrollment")}
        {newsArticle("Learn React", "Top course - 10000 enrollment")}
    </div>
  )
}

export default Widgets
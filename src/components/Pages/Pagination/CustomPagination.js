import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React from 'react'

const darkTheme = createMuiTheme({
  palette:{
    type: "dark",
  },
})


const CustomPagination = ({setPage, numOfPages=10}) => {
  const handlePageChange = (page) => {
   
    setPage(page);
    window.scroll(0,0);
  };

  return (
    <div 
    style={{
      width : "100%",
      display: "flex",
      justifyContent: "center",
      margin : 15,

    }} >
      <ThemeProvider theme ={darkTheme}>
        <Pagination 
      count={numOfPages} 
      color ="primary"
      hideNextButton
      hidePrevButton
      onChange = {(e)=>handlePageChange(e.target.textContent)} />
      </ThemeProvider>
     
    </div>
  )
}

export default CustomPagination;

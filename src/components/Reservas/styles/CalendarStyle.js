import { makeStyles } from "@mui/styles";

const CalendarStyle = makeStyles({
    input: {
      fontFamily: "sans-serif",
      fontSize: "1%",
      "& .react-date-picker__wrapper": {
        padding: "0 10px",
        borderColor: "#ccc",
        borderRadius: "4px"
      },
      "& .MuiCalendarPicker-root": {
        background: "aliceblue",
      },"& .MuiDialogActions-root": {
        display: "none"
      },"& .MuiDatePickerToolbar-title": {
        margin: 0
      },"& .MuiDatePickerToolbar-root": {
              background: "aliceblue"
      }  
       
    }
  });

  export { CalendarStyle }


  // ,
  //     "& .MuiPickersDay-root": {
  //       background: "red"
  //     },"& .MuiDayPicker-weekContainer": {
  //       background: "aliceblue"
  //     },"& .MuiDatePickerToolbar-root": {
  //       background: "#8bc34a"
  //     }"& .MuiSvgIcon-root": {
      //   display: "none"
      // },
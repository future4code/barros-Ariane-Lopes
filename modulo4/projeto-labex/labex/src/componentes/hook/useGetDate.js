const useGetDate = () => {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var year = today.getFullYear() ;
    var month = String(today.getMonth() +1).padStart(2,'0');

    return  `${year}-${month}-${day}`
}

export default useGetDate;
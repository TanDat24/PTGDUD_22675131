import React,{useState,useEffect} from 'react'

const Ontap = () => {

  const [min,setmin]= useState([]);
  
  useEffect(() => {
     var url = 'https://data.bs.ch/api/explore/v2.1/catalog/datasets/100302/records?limit=20'
     fetch(url)
     .then((res) => res.json())
     .then((data) => setmin(data))
   
   }, []);

   useEffect(()=>{
    console.log(min)
   },[min])
  return (
    <div>
      {min.length > 0 ? (
        min.map((item, index) => (
          <div key={index}>{min.datum}</div> 
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Ontap;
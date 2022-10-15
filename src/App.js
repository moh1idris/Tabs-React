import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setLoading] = useState(true);;
  const [jobs,setJobs] = useState([]);
  const [value,setValue] = useState(1);

const fetchJobs = async () => {                                       //--> this is used to fetch the data from the URl 
  const response = await fetch(url);                                  //--> from the URL 
  const newJobs = await response.json();                              //--> to fetech an make ithi srespone in the JSON 
  setJobs(newJobs);                                                   //--> Seting the jobs as the newjobs -> from the respone.json
  setLoading(false);                                                  //--> setingLoaing as False-> to show the the data
 };

 useEffect(() => {
  fetchJobs();                                                        //--> the job which is been fetched is getting into the <-ACTION->              
   },[])
 

  if(loading){
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

const {company, dates, duties, title} = jobs[value];

  return (
  <section className='section'>
    <div className="title">
    <h2>expirence</h2>
    <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">

      {jobs.map((item,index)=>{
        return( 
          <button key={item.id} onClick={()=>setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
          );
        })}
        </div>
      {/* job info */}
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return(
            <div className="job-desc" key={index}>
              <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </div>
  </section>
  );
};

export default App

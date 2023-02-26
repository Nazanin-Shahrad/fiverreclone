import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React ,{useState}from "react";
import newRequest from "../../utils/newRequest";
import Review from "../review/Review";
import "./Reviews.scss";
// import toast from 'react-hot-toast'


const Reviews = ({ gigId }) => {
  const resError=null;


  const queryClient = useQueryClient()
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    },
    onError:(error)=>{ 

     
      console.log(error['response'].data);

      // const x = error['response'].data;
      // // const resError = error['response'].data;
      // // console.log(resError);
      // // // toast.error(`Something went wrong: ${error.message}`)
      // // throw Error(error['response'].data);
      // return x
    }


  });
  // console.log("mutation error" , mutation.data)

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    console.log("desc and star is ::::" , desc , star)
   
   
    mutation.mutate({ gigId, desc, star });
    console.log(mutation.isError);
    // if(mutation.isError){
    //   if ((mutation.error.message) === "Request failed with status code 403"){
    //     console.log("you are a seller and can not add a review.")
    //   }
    // }
  
    
  };


  // console.log("mutation review added :::" , mutation.error.reponse.data)
  

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? ("loading")
        : error
        ? ("Something went wrong!")
        : data.map((review) => <Review key={review._id} review={review} />)}
      <div className="add">
        <h3>Add a review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="write your opinion" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
          {mutation.isError && <div>{mutation.error['response'].data}</div>}
          {mutation.isSuccess ? <div> review added</div> : null}
        </form>
      </div>
    </div>
  );
};

export default Reviews;
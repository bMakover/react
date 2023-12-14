import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListEmp from './listEmp';
import InputEmp from './inputEmp';
import axios from 'axios';
import { useSearchContext } from './searchContext'; // Adjust the path accordingly

const AppEmp = () => {
  const [ar, setAr] = useState([]);
  const { searchQuery, selectedGender } = useSearchContext();
  const params = useParams();

  useEffect(() => {
    doApi();
  }, [params.company, searchQuery, selectedGender]);

  const doApi = async () => {
    let searchParam = params.company || searchQuery || "SSN";
    let genderParam = selectedGender ? `&gender=${selectedGender}` : '';

    let url = `https://random-data-api.com/api/users/random_user/?size=10&seed=${searchParam}${genderParam}`;

    try {
      let res = await axios.get(url);
      setAr(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setAr([]);
    }
  };

  return (
    <div>
      <InputEmp />
      <ListEmp ar={ar} />
    </div>
  );
};

export default AppEmp;

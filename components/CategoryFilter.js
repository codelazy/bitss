import Link from "next/link";
import styles from '../styles/Home.module.css'
import { withRouter } from 'next/router'
import _ from 'lodash';

const CategoryFilter = ({ categories, onSelectCategory}) => {

  
  if(categories) {
    const links = categories.map((i, index) => (
      <div className="flex-initial rounded-md" key={i.category}>
        <button className=" bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6" 
          onClick={() => onSelectCategory(i.category)} >
            { i.category }
        </button>
      </div>
    ));
    return (

      <div className="mt-2 flex space-x-4">
        { links }
      </div>
    )}
};

export default withRouter(CategoryFilter);
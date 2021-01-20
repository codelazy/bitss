import Link from "next/link";
import styles from '../styles/Home.module.css'
import { withRouter } from 'next/router'
import _ from 'lodash';

const SubCategoryFilter = ({items, selectedCategory, outputCompanyName}) => {
  const currentItems = items
    .filter(i => i.category.id === selectedCategory.id)
    .map(i => (
      <div className="mt-2 flex space-x-4" key={i.id}>
        <div className="flex-initial" >
         -- {outputCompanyName}-{ i.title }
        </div>
        <div className="flex-initial" >
          <button>
            checkout
          </button>
        </div>
      </div>
    ));
  return (
    <div className="bg-white full">
      { currentItems } 
    </div>
  );
};

export default withRouter(SubCategoryFilter);
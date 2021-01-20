import React, { useState } from "react";
import Link from 'next/link'
import Head from 'next/head'
import _ from 'lodash';
import SiteLayout from '../components/SiteLayout'
import CategoryFilter from '../components/CategoryFilter'
import SubCategoryFilter from '../components/SubCategoryFilter'


class Indexed extends React.Component {
  //API
  static async getInitialProps(ctx) {
    const res = await fetch('http://localhost:3000/api/category')
    const json = await res.json()
    return { apiBitssCategories: json.bitssListing}
  }

  constructor () {
    super();
    this.state = {
      stateValues: {selectedCategoryId: null, getCompanyName: null}
    };
    this.state = {value: ''};
    this.handleChange = this.onChanged.bind(this);
    this.onSelectCategory = this.onSelectedCategory.bind(this);
  }

  //CHECK ONCHANGE INPUT TEXT
  onChanged(id) {
    this.setState({
      getCompanyName: id.target.value
    });  
  }

  //CHECKED SELECTED CATEGORY
  onSelectedCategory(id) {
    this.setState({
      selectedCategoryId: id
    });
  }

  //------------//
  // OUTPUT 
  //-----------//
  render() {

    //DECLARED CONST VALUES
    const {stateValues} = this.state;
    const {getCompanyName} = this.state;
    const {selectedCategoryId } = this.state;
    const selectedCategory = _.find(this.props.apiBitssCategories, i => i.id === selectedCategoryId) || '';

    return (
      <div className="homme-page" >

        {/* START  ::  HEADER TAGS  (META) */}
        <Head>
          <title>Homepage App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* END  ::  HEADER TAGS  (META) */}

        {/* START  ::  TAGLINE */}
          <div className="max-w-6xl mx-auto mt-8 px-8">
            <h1 className="text-left">
              <span className="block text-5xl font-bold leading-none">
                Shorten URL, <span className="font-color-orange">unscripted.</span>
              </span>
              
              <span className="mt-4 block text-xl text-gray-600 leading-tight">
                Say goodbye to cryptic URL and start sharing straight to the point!
              </span>
              
            </h1>
          </div>
        {/* END  ::  TAGLINE */}


        <div className="mt-8 bg-orange-500 py-8">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex mb-4">
              <div className="w-1/2">
                {/* <div className="mb-3">
                  <h3 className="mr-2 inline-block w-12 h-12 rounded-full bg-black text-white text-center text-3xl font-bold">1</h3>
                  <p className="inline-block ">Input your company name & URL</p>
                </div> */}
                <div className="relative flex">
                  <input aria-label="companyUrl" name="companyName" type="text" required className="appearance-none rounded relative block w-full px-6 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-lg rounded-b-lg h-15 rounded focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Company URL" />  
                </div>
              </div>
              
              <div className="w-1/2 ml-12">
                
                <div className="relative flex">
                  <div className="w-full">
                    <input 
                    value={getCompanyName} onChange={this.handleChange}
                    aria-label={getCompanyName} name={getCompanyName} type="text" required className="appearance-none rounded relative block w-full px-6 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-lg rounded-b-lg h-15 rounded focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Input your company name" />
                  
                  </div>
                  
                </div>
              </div>
            </div>
            {/* <div className="mb-4 w-full">
              <div className="w-full mb-3">
                <p className="w-full">Choose what category</p>
              </div>
              
                <CategoryFilter categories={this.props.apiBitssCategories} onSelectCategory={this.onSelectCategory} />
              
              <div className="flex w-full">
                <SubCategoryFilter items={this.props.apiBitssCategories} selectedCategory={selectedCategory} outputCompanyName={getCompanyName} />
              </div>
              
            </div>


            <div className="w-full mt-6">
              <div className="flex w-full bg-white rounded-lg border py-3 px-3"> 
              
                <div  className="new-url">https://john.sales.today</div>
                <div className="copy-text text-right bold">COPY</div>
              </div>
            </div>  */}
          </div>
        </div>

        
      </div>
    );
  }
}

Indexed.layout = SiteLayout


export default Indexed
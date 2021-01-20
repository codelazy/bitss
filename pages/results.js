import React, { useState } from "react";
import Link from 'next/link'
import Head from 'next/head'
import _ from 'lodash';
import SiteLayout from '../components/SiteLayout'
import HeaderNavDense from '../components/HeaderNavDense'
import DataTable from '../components/DataTable'
import { TabGroup } from '@statikly/funk'

const TabButton = ({index, title, totalPrice }) => {
  return (
    <TabGroup.Tab
      key={index}
      index={index}
      className="px-2 py-2 text-indigo-700 font-bold text-xs uppercase tracking-wider px-3 inline-block rounded-full mb-2 focus:outline-none focus:bg-indigo-200"
      activeClassName="bg-indigo-300"
      inactiveClassName="hover:bg-indigo-200"
      
    >
      
      {title} {totalPrice}
      
    </TabGroup.Tab>
  );
}

const TabBoxButton = ({index, title, totalPrice }) => {
  return (
    <TabGroup.Tab
      key={index}
      index={index}
      className="bg-white font-bold text-xs uppercase tracking-wider px-3 inline-block rounded-full mb-2 focus:outline-none  appearance-none rounded relative block w-full px-6 py-4  text-gray-900 rounded-t-lg rounded-b-lg h-15 rounded focus:shadow-outline-blue focus:border-blue-300 focus:z-16 sm:text-sm sm:leading-5 border"
      activeClassName="bg-indigo-300"
      inactiveClassName="hover:bg-indigo-200"
      
    >
      <div>
        {title} 
      </div>
      <div>
        HKD ${totalPrice} / year
      </div>
    </TabGroup.Tab>
  );
}

const TabPanelAllOutput = ({apiSubCat, outputCompanyName}) => {
  if(apiSubCat) {
    const links = apiSubCat.map((i, index) => (
      
      <div key={index} className="border-gray-300 bg-white border-b py-3 px-6 block min-w-full divide-y divide-light-blue-400">
        <div className="flex">
          <div className="w-1/3 text-left text-sm font-medium text-gray-900">{outputCompanyName}.{i.subCategory}</div>
          <div className="w-1/3 text-right text-sm font-medium text-gray-900">{i.price}</div>
          <div className="w-1/3 text-sm text-right">
            <button className="font-medium uppercase tracking-wider text-xs text-gray-700 bg-transparent hover:bg-gray-300 font-semibold hover:text-gray-900 py-2 px-4 border border-gray-400 hover:border-transparent rounded">Buy</button>
          </div>
        </div>
      </div>
    
    ));
    return (
        <div>
          { links }
        </div>
    )
  }
  
}
const TabPanelOutput = ({apiSubCat, index, outputCompanyName}) => {
  
  if(apiSubCat) {
    
    const links = apiSubCat.map((i, index) => (
      <div key={index} className="border-gray-300 bg-white border-b py-3 px-6 block min-w-full divide-y divide-light-blue-400">
        <div className="flex">
          <div className="w-1/3 text-left text-sm font-medium text-gray-900">{outputCompanyName}.{i.subCategory}</div>
          <div className="w-1/3 text-right text-sm font-smedium text-gray-900">{i.price}</div>
          
        </div>
      </div>
      
      ));
    return (

      <TabGroup.TabPanel
        index={index}
        className="border-gray-300 bg-gray-50 shadow border-b border-gray-200 sm:rounded-lg"
        activeClassName="opacity-100 duration-500 translate-x-0"
        inactiveClassName="absolute opacity-0 -translate-x-2"
      >
      <div className="bg-gray-50 py-4 px-6">
        <div className="flex align-center">
            <div className="flex w-1/3 text-left  items-center text-xs font-medium text-gray-500 uppercase tracking-wider">Bitss</div>
            <div className="flex w-1/3 text-right items-center text-xs font-medium text-gray-500 uppercase tracking-wider">Price</div>
            <div className="flex w-1/3 text-sm text-right   items-center">
              <button className="font-medium uppercase tracking-wider text-xs text-gray-700 bg-transparent hover:bg-gray-300 font-semibold hover:text-gray-900 py-2 px-4 border border-gray-400 hover:border-transparent rounded">Buy</button>
            </div>
        </div>  
      </div>    
       <div >
        { links }
        </div>
      </TabGroup.TabPanel>
    )
  }
  
}

class Results extends React.Component {
  
  static async getInitialProps(ctx) {
    const res = await fetch('http://localhost:3000/api/category')
    const json = await res.json()
    return { apiBitssCategories: json.bitssListing}
  }
  constructor () {
    super();
    this.state = {
      stateValues: {selectedCategoryId: null, getCompanyName: null, getCompanyUrl: null}
    };
    this.state = {value: ''};
    this.handleChange = this.onChanged.bind(this);
    this.state = {
      stateValues: {selectedCategoryId:  null}
    };
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
    const {getCompanyUrl} = this.state;
    const {selectedCategoryId } = this.state;
    const selectedCategory = _.find(this.props.apiBitssCategories, i => i.id === selectedCategoryId) || '';    


    return (
      <div className="bg-white antialiased ">
        <Head>
          <title>Result App</title>
          <link rel="icon" href="/favicon.ico" />
          <style>{`
            #__next { min-height: 100%; height: 100% }
          `}
          </style>
        </Head>

        <HeaderNavDense/>
        <div className="results-page max-w-1xl mx-auto px-6 py-2 flex mb-4" >
          
          {/* START  ::  LEFT SIDE  */}
          <div className="w-3/4 ">

            {/* START  ::  SHOW WARNING MESSAGE  */}
            <div className="bg-yellow-300 px-4 py-4 rounded mb-4">
              Google Domains isn't available in your country/region yet. Find out where Google Domains is available
            </div>
            {/* END  ::  SHOW WARNING MESSAGE  */}

            {/* START  ::  INPUT/SEARCH  */}
            <div className="relative flex">
              <input aria-label={getCompanyName} value={getCompanyName} onChange={this.handleChange} aria-label={getCompanyName} name={getCompanyName} type="text" required className="shadow-lg appearance-none rounded relative block w-full px-6 py-4  placeholder-gray-500 text-gray-900 rounded-t-lg rounded-b-lg h-15 rounded focus:shadow-outline-blue focus:border-blue-300 focus:z-16 sm:text-sm sm:leading-5" placeholder="Company Name" />      
            </div>
            {/* END  ::  INPUT/SEARCH  */}

            {/* START  ::  TABS */}
            <div className="flex flex-col">
              <TabGroup numTabs={2}>
                <div className=" container mx-auto">
                <div className="">
                  
                  <TabGroup.TabList className="pt-8 grid grid-flow-col justify-center gap-3">
                    <TabButton index={0} title="Free" onSelectCategory={this.onSelectCategory} />
                    <TabButton index={1} title="Premium" onSelectCategory={this.onSelectCategory} />
                    <TabButton index={2} title="Wholesale Package(s)" onSelectCategory={this.onSelectCategory} />
                  </TabGroup.TabList>

                  <div className="">
                    <TabGroup.TabPanel
                      index={0}
                      className="my-8 border-gray-300 bg-gray-50 shadow border-b border-gray-200 sm:rounded-lg"
                      activeClassName="opacity-100 duration-500 translate-x-0"
                      inactiveClassName="absolute opacity-0 -translate-x-2"
                    > 
                      <div className="bg-gray-50 py-4 px-6">
                        <div className="flex">
                            <div className="w-1/3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bitss</div>
                            <div className="w-1/3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</div>
                            <div className="w-1/3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Buy</div>
                        </div>  
                      </div>
                      
                      {this.props.apiBitssCategories.map((i, index) => ( 
                        
                          <TabPanelAllOutput  apiSubCat={i.subCategories}outputCompanyName={getCompanyName} />
                         
                      ))}
                    </TabGroup.TabPanel>
                    <TabGroup.TabPanel
                      index={1}
                      className="my-8 border-gray-300 bg-gray-50 shadow border-b border-gray-200 sm:rounded-lg"
                      activeClassName="opacity-100 duration-500 translate-x-0"
                      inactiveClassName="absolute opacity-0 -translate-x-2"
                    > 
                      <div className="bg-gray-50 py-4 px-6">
                        <div className="flex">
                            <div className="w-1/3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bitss</div>
                            <div className="w-1/3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</div>
                            <div className="w-1/3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Buy</div>
                        </div>  
                      </div>
                      {this.props.apiBitssCategories.map((i, index) => (  
                        <TabPanelAllOutput  apiSubCat={i.subCategories}outputCompanyName={getCompanyName} />
                      ))}
                    </TabGroup.TabPanel>
                    <TabGroup.TabPanel
                      index={2} 
                      className="p-2 transition-all transform h-64"
                      activeClassName="opacity-100 duration-500 translate-x-0"
                      inactiveClassName="opacity-0 -translate-x-2"
                    >
                      <TabGroup numTabs={3}>
                          <TabGroup.TabList className="pt-8 grid grid-flow-col justify-center gap-3">
                            {this.props.apiBitssCategories.map((i, index) => (
                              <TabBoxButton index={index} title={i.category} onSelectCategory={this.onSelectCategory} totalPrice={i.totalPrice} />
                           ))}
                          </TabGroup.TabList>
                          
                          {this.props.apiBitssCategories.map((i, index) => (
                            <TabPanelOutput  apiSubCat={i.subCategories} index={index}  selectedCategoryId={index} outputCompanyName={getCompanyName} />
                          ))}
                      </TabGroup>
                    </TabGroup.TabPanel>
                  </div>
                </div>
              </div>
              </TabGroup>
            </div>
            {/* END  ::  TABS */}
          </div>
          {/* END  ::  LEFT SIDE  */}

          {/* RIGHT SIDE  */}
          <div className="w-1/4 ml-12 py-4 px-4 rounded-lg shadow-sm bg-white">
              <h4 className="font-bold text-gray-700">Company Information</h4>
              
              <div className="flex font-bold text-sm my-4">
                <input aria-label={getCompanyUrl} value={getCompanyUrl} aria-label={getCompanyUrl} name={getCompanyUrl} type="text" required className="border rounded  block w-full px-6 py-4  placeholder-gray-500 text-gray-900 rounded-lg h-8 rounded focus:shadow-outline-blue focus:border-blue-300 focus:z-16 sm:text-sm sm:leading-5" placeholder="Company URL" />      
              </div>
              <div className="flex font-bold text-sm my-4">
                <div className="w-1/2 text-xs">Company Name: </div>
                <div className="w-1/2">{getCompanyName}</div>
                
              </div>
          </div>

        </div>
      </div>
    );
  }
}

Results.layout = SiteLayout


export default Results
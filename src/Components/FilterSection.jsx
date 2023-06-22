import React, { useState } from 'react';

const FilterSection = ({categorySelect,filterinfo}) => {
    
    return (
        <>
            <h6 className='text-center' style={{color:'gray'}}>Category</h6> <hr /> <hr />
                    <div className="form-check ">
                        <input onChange={categorySelect} className="form-check-input" value='all' type="radio" id="flexRadioDefault" name="category" />
                        <label  className="form-check-label"style={{fontWeight:'700',color:'gray'}}  for="flexRadioDefault">All</label>
                    </div> <br />
                    <div className="form-check ">
                        <input onChange={categorySelect} className="form-check-input" value='Bag' type="radio" id="flexRadioDefault1" name="category" />
                        <label  className="form-check-label"style={{fontWeight:'700',color:'gray'}} for="flexRadioDefault1">Bag</label>
                    </div> <br />
                    <div className="form-check ">
                        <input onChange={categorySelect} className="form-check-input" value='watter-Bottol' type="radio" id="flexRadioDefault2" name="category" />
                        <label  className="form-check-label"style={{fontWeight:'700',color:'gray'}} for="flexRadioDefault2">Water Bottle</label>
                    </div> <br />
                    <div className="form-check ">
                        <input onChange={categorySelect} className="form-check-input" value='Laptop-Sticker' type="radio" id="flexRadioDefault3" name="category" />
                        <label  className="form-check-label"style={{fontWeight:'700',color:'gray'}} for="flexRadioDefault3">Laptop Sticker</label>
                    </div> <br />
                    <div className="form-check ">
                        <input onChange={categorySelect} className="form-check-input" value='Mobile-Cover' type="radio" id="flexRadioDefault4" name="category" />
                        <label  className="form-check-label"style={{fontWeight:'700',color:'gray'}} for="flexRadioDefault4">Mobile Cover</label>
                    </div> <hr /><hr />
                    <h6 className='mt-2 text-center' style={{fontWeight:'700',color:'gray'}}>Filter Your Products</h6>
                    <select onClick={filterinfo} class="selectpicker form-control mt-3" data-style="btn-primary" style={{width:'200px'}} className='form-control' data-width="100%">
                            <option value="">All</option>
                            <option  value="hightolow">High To Low</option>
                            <option  value="lowtohigh">Low To High</option>
                        </select>
        </>
    );
};

export default FilterSection;
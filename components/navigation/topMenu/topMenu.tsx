import { Icon } from '@mui/material';
import { FlatLogoIcon } from '../../icons/FlatLogoIcon/flatLogoIcon';
import HandymanIcon from '@mui/icons-material/Handyman';
import React from 'react';
import Link from 'next/link'

/**
 * This is a component to hold UTD Trends branding and basic navigation
 * @returns 
 */
export function TopMenu(){
  return (
    <div className="bg-primary-dark h-16 text-light relative p-4">
      <div className="h-full float-left flex min-w-fit w-1/4 justify-center " >
	    <Link href="/">
		  <a>
            <div className="h-full flex align-middle place-items-center justify-center" >
              <div className="h-full float-left mr-2 w-7">
                <FlatLogoIcon />
              </div>
              <h1 className=" float-right text-xl" >UTD Trends</h1>
            </div>
		  </a>
		</Link>
      </div>
    </div>
  );
};

export default TopMenu;

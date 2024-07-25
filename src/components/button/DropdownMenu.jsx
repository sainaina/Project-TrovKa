
import * as React from "react";
import { Dropdown } from "flowbite-react";

export function DropdownMenu() {
  return (
    <div className="h-[70px] w-full bg-[#022278] flex justify-evenly items-center font-simple text-white text-lg mt-10">
      <Dropdown label="Restaurants" bg-transparent className="" >
        <div className="flex flex-col">
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Juice Bar
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Food
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Café
          </Dropdown.Item>
          
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Pizza
          </Dropdown.Item>
        </div>
      </Dropdown>
      <Dropdown label="Education" className="mt-[-30px]">
        <div className="flex flex-col">
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            IT Course
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            English
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Chinese
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Khmer
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Math
          </Dropdown.Item>
        </div>
      </Dropdown>
      <Dropdown label="Auto Services" className="mt-[-30px]">
        <div className="flex flex-col">
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Auto Repair
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Car Repair
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Car Wash
          </Dropdown.Item>
        </div>
      </Dropdown>
      <Dropdown label="Home Services" className="mt-[-30px]">
        <div className="flex flex-col">
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Electricians
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Contractors
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Cleaners
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            HVAC
          </Dropdown.Item>
        </div>
      </Dropdown>
      <Dropdown label="Electronics" className="mt-[-30px]">
        <div className="flex flex-col">
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            TV and audio repair
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Computer repair
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Camera repair
          </Dropdown.Item>
          <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
            Phone repair
          </Dropdown.Item>
        </div>
      </Dropdown>
    </div>
  );
}

export default DropdownMenu;

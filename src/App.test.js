import {Shallow} from "enzyme"

import React from "react"
import App from "./App"

test("div is working correctly",()=>{
  const component=Shallow(<App/>)
  const divcomp=component.find("div").exist();
  expect(divcomp).toBe(true)
})

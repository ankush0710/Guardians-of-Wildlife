import axios from "axios";
import Wildlife from "../Pages/Wildlife";
import reducer from "../redux/reducers/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FetchWildlifeData } from "../redux/action/action";
import { vi } from "vitest";

vi.mock("axios");

describe("test case for api fetching", () => {
  //test case to check api for Wildlife data will call properly or not by using api mocking
  it("test for api of wildlife data", async () => {
    //test scenario
    const tempData = [
      {
        id: 1,
        name: "African Elephant",
        species: "Loxodonta africana",
        habitat: "Savanna",
        diet: "Herbivore",
        status: "Vulnerable",
        lifespan: 60,
        weight: 6000,
        height: 300,
        speed: 40,
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:240,cw:1440,ch:1080,q:80,w:1440/TVR7E3Kuzg2iRhKkjZPeWk.jpg",
      },
    ];

    axios.get.mockResolvedValue({ data: tempData });

    const dispatch = vi.fn();

    const wildlifeData = await FetchWildlifeData(1)(dispatch);

    //expected result
    expect(axios.get).toHaveBeenCalled();
  });
});
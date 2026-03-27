import axios from "axios";
import { FetchProgramData } from "../redux/action/action";
import { vi } from "vitest";

vi.mock("axios");

//test case to check api for program data will call properly or not by using api mocking
it("test for api of program data", async () => {
  //test scenario
  const tempData = [
    {
      id: 1,
      programName: "Project Tiger",
      country: "India",
      govermentAgency: "Ministry of Environment, Forest and Climate Change",
      description:
        "Project Tiger was launched in 1973 with the aim of conserving Bengal tigers. This program established over 50 tiger reserves across India to safeguard tigers and their natural habitats. Efforts include anti-poaching strategies, habitat restoration, and enhancing the protected areas' management. Additionally, eco-tourism is promoted around tiger reserves to generate funds and engage local communities. The initiative has seen a significant increase in tiger populations in India and has played a vital role in creating a broader conservation model.",
      objectivesAndGoals:
        "To stabilize and increase tiger populations, restore degraded habitats, and enhance biodiversity in protected areas while engaging local communities for conservation.",
      yearLaunched: 1973,
      currentStatus: "Ongoing, successful",
      funding: "50 million",
      duration: "Ongoing",
      targetSpecies: "Bengal Tiger, Indochinese Tiger",
      imageUrl:
        "https://d14a823tufvajd.cloudfront.net/images/G1p1KRKRSEJA869JZNxf.jpg",
    },
  ];

  axios.get.mockResolvedValue({ data: tempData });

  const dispatch = vi.fn();

  const programData = await FetchProgramData(1)(dispatch);

  //expected result
  expect(axios.get).toHaveBeenCalled();
});

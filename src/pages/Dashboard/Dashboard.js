import React, { useEffect, useState,useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { TbBackground, TbRuler2 } from "react-icons/tb";
import DashboardBox from "./components/DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import { GiStarsStack } from "react-icons/gi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Chart } from "react-google-charts";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import InputLabel from "@mui/material/InputLabel";
import Pagination from "@mui/material/Pagination";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MyContext } from "../../App";


export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];


export const options = {
  backgroundColor: "transparent",
  chartArea: { width: "100%", height: "100%" },
};

const Dashboard = () => {
  const context = useContext(MyContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setshowBy] = useState("");
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;

  useEffect(()=>{
   context.setisHideSidebarAndHeader(false);
  },[])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                icon={<FaUserCircle />}
                grow={true}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<MdShoppingCart />}
                grow={true}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<BsBagCheckFill />}
                grow={true}
              />
              <DashboardBox
                color={["#e1950e", "#f3cd29"]}
                icon={<GiStarsStack />}
                grow={true}
              />
            </div>
          </div>

          <div className="col-md-4 pl-0 .topPart2">
            <div className="box graphbox">
              <div className="d-flex align-items-center rand band">
                <h6 className="text-white mb-0 mt-0">Total Sales</h6>

                <div className="ml-auto">
                  <Button
                    className="ml-auto toggeleIcon ssasa"
                    onClick={handleClick}
                  >
                    <HiOutlineDotsVertical />
                  </Button>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>Last Day</MenuItem>
                    <MenuItem onClick={handleClose}>Last Week</MenuItem>
                    <MenuItem onClick={handleClose}>Last Month</MenuItem>
                    <MenuItem onClick={handleClose}>Last Year</MenuItem>
                  </Menu>
                </div>
              </div>

              <h3 className="text-white font-weight-bold">$3,787,678.00</h3>
              <p>$3,578,90 in last month</p>
              <Chart
                chartType="PieChart"
                width="100%"
                height="170px"
                data={data}
                options={options}
              />
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4 ">
          <h3 className="hd">Best Selling Products</h3>
          <div className="row cardFilters  mt-3 ">
            <div className="col">
              <h4>Show By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setshowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-100 !important"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col">
              <h4>Category By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setshowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-100 !important"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col">
              <h4>Category By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setshowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-100 !important"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col">
              <h4>Category By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setshowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-100 !important"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "300px" }}>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src="https://5.imimg.com/data5/SELLER/Default/2023/3/295805010/LR/DR/EH/187131999/4-jpeg-500x500.jpeg"
                            className="w-100"
                          />
                        </div>
                      </div>

                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p className="paraaa" id="ali">
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Oil</td>
                  <td>Brand A</td>
                  <td>
                    <del className="old">$3.5</del>
                    <span className="new text-danger">$3.00</span>
                  </td>
                  <td>100</td>
                  <td>4.5</td>
                  <td>50</td>
                  <td>200</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Chocolates</td>
                  <td>Sweets</td>
                  <td>Brand B</td>
                  <td>$5</td>
                  <td>200</td>
                  <td>4.8</td>
                  <td>150</td>
                  <td>300</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Pulses</td>
                  <td>Groceries</td>
                  <td>Brand C</td>
                  <td>$2</td>
                  <td>500</td>
                  <td>4.3</td>
                  <td>100</td>
                  <td>400</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>004</td>
                  <td>Rice</td>
                  <td>Groceries</td>
                  <td>Brand D</td>
                  <td>$20</td>
                  <td>300</td>
                  <td>4.6</td>
                  <td>200</td>
                  <td>500</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>005</td>
                  <td>Cookies</td>
                  <td>Snacks</td>
                  <td>Brand E</td>
                  <td>$3</td>
                  <td>250</td>
                  <td>4.7</td>
                  <td>120</td>
                  <td>350</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>006</td>
                  <td>Cold Drinks</td>
                  <td>Beverages</td>
                  <td>Brand F</td>
                  <td>$1.5</td>
                  <td>400</td>
                  <td>4.2</td>
                  <td>80</td>
                  <td>150</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>007</td>
                  <td>Room Fresheners</td>
                  <td>Home Care</td>
                  <td>Brand G</td>
                  <td>$8</td>
                  <td>120</td>
                  <td>4.4</td>
                  <td>90</td>
                  <td>220</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>008</td>
                  <td>Mosquito Repellents</td>
                  <td>Home Care</td>
                  <td>Brand H</td>
                  <td>$6</td>
                  <td>150</td>
                  <td>4.3</td>
                  <td>60</td>
                  <td>180</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>009</td>
                  <td>Toothbrush (2 nos)</td>
                  <td>Personal Care</td>
                  <td>Brand I</td>
                  <td>$4</td>
                  <td>200</td>
                  <td>4.6</td>
                  <td>100</td>
                  <td>250</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>010</td>
                  <td>Bathing Soap</td>
                  <td>Personal Care</td>
                  <td>Brand J</td>
                  <td>$3</td>
                  <td>180</td>
                  <td>4.5</td>
                  <td>80</td>
                  <td>210</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>011</td>
                  <td>Shampoo/Hair Conditioner</td>
                  <td>Personal Care</td>
                  <td>Brand K</td>
                  <td>$7</td>
                  <td>160</td>
                  <td>4.7</td>
                  <td>90</td>
                  <td>240</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="d-flex tableFooter">
              <Pagination
                count={10}
                color="primary"
                className="pagination"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

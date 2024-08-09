import { useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import Rating from '@mui/material/Rating';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaRegImages } from "react-icons/fa";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoCloseSharp } from "react-icons/io5";
const ProductUpload = () => {
  const [categoryVal, setcategoryVal] = useState("");
  const [RatingValue, setRatingValue] = useState(1);

  const handleChangeCategory = (event) => {
    setcategoryVal(event.target.value);
  };

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });
  return (
    <>
      <div className="right-content w-100" id="prod">
        <div
          class="card shadow border-0 w-100 flex-row p-4 res-col "
          id="prod_Detail"
        >
          <h5 class="mb-0">Product View</h5>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb component="a" href="#" label="Product" />
            <StyledBreadcrumb
              label="Products"
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>

        <form action="" className="form">
          <div className="row">
            <div className="col-sm-12">
              <div className="card p-4 " id="product_card">
                <h5 className="mb-4">Basic Information</h5>

                <div className="form-group">
                  <h6>Title</h6>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <h6>DISCRIPTION</h6>
                  <textarea row={5} col={10}></textarea>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>CATEGORY</h6>
                      <Select
                        value={categoryVal}
                        onChange={handleChangeCategory}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>BRAND</h6>
                      <Select
                        value={categoryVal}
                        onChange={handleChangeCategory}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <h6>REGULAR PRICE</h6>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <h6>DISCOUNT PRICE</h6>
                        <input type="text" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <h6>RATINGS</h6>
                        <Rating
        name="simple-controlled"
        value={RatingValue}
        onChange={(event, newValue) => {
          setRatingValue(newValue);
        }}
      />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <h6>PRODUCT STOCK</h6>
                        <input type="text" />
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className='card p-4 mt-0 ' id="caard">
                        <div className="imagesUploadSec">
                            <h5 class="mb-4">Media And Published</h5>

                            <div className='imgUploadBox d-flex align-items-center'>

                                <div className='uploadBox'>
                                    <input type="file" multiple name="images" />
                                    <div className='info'>
                                        <FaRegImages />
                                        <h5>image upload</h5>
                                    </div>

                                </div>


                            </div>

                            <br />

                            <Button type="button" className="clr btn-blue btn-lg btn-big w-100"
                            ><FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW  </Button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ProductUpload;

import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardBox from "../Dashboard/components/DashboardBox";
import Rating from '@mui/material/Rating';
import { FaReply } from "react-icons/fa";
import Button from '@mui/material/Button';
// import  from 'as'
import google from "../../assets/images/google.png";
import UserAvatarImgComponent from "../../components/userAvatarImg";
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
const ProductDetails = () => {
  return (
    <>
      <div className="right-content w-100" id="prod">
        <div
          class="card shadow border-0 w-100 flex-row p-4 res-col "
          id="prod_Detail"
        >
          <h5 class="mb-0">Product Upload</h5>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb component="a" href="#" label="Products" />
            <StyledBreadcrumb
              label="Product"
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>

        <div className="card" id="product_card">
          <div className="row no-gutters ">
            <div className="col-md-4">
              {/* <img src={google} alt="" width="300px" /> */}
              <h4>Gallery</h4>
              <img src={google} alt="Product" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h4>Product details</h4>
              <div className="card-body">
                <h5 className="card-title">
                  Formal suits for men wedding slim fit 3 piece dress business
                  party jacket
                </h5>
                <p className="card-text">
                  <strong>Brand:</strong> Ecstasy
                </p>
                <p className="card-text">
                  <strong>Category:</strong> Man's
                </p>
                <p className="card-text">
                  <strong>Tags:</strong> Fresh,cookee{" "}
                </p>
                <p className="card-text">
                  <strong>Price:</strong>$23
                </p>
                <p className="card-text">
                  <strong>Stock:</strong> 68 Piece
                </p>
                <p className="card-text">
                  <strong>Reviews:</strong> (03 Review)
                </p>
                <p className="card-text">
                  <strong>Published:</strong> 02 Feb 2020
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h5 class="mt-4 mb-3">Product Description</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              reprehenderit repellendus expedita esse cupiditate quos doloremque
              rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
              voluptatem delectus nam, molestiae, repellendus ab sint quo
              aliquam debitis amet natus doloremque laudantium? Repudiandae,
              consequuntur, officiis quidem quo deleniti, autem non laudantium
              sequi error molestiae ducimus accusamus facere velit consectetur
              vero dolore natus nihil temporibus aspernatur quia consequatur?
              Consequuntur voluptate deserunt repellat tenetur debitis molestiae
              doloribus dicta. In rem illum dolorem atque ratione voluptates
              asperiores maxime doloremque laudantium magni neque ad quae quos
              quidem, quaerat rerum ducimus blanditiis reiciendis
            </p>
            <br />
            {/* <h6 class="mt-4 mb-4">Rating Analytics</h6>
      <div className="ratingSection">

      </div> */}
            <div class="rating-analytics">
              <h3>Rating Analytics</h3>
              <div class="ratingrow">
                <span class="col1">5 Star</span>
                <div class="col2">
                  <div class="progress">
                    <div class="progress-bar" id="star5"></div>
                  </div>
                </div>
                <span class="col3">(22)</span>
              </div>
              <div class="ratingrow">
                <span class="col1">4 Star</span>
                <div class="col2">
                  <div class="progress">
                    <div class="progress-bar" id="star4"></div>
                  </div>
                </div>
                <span class="col3">(22)</span>
              </div>
              <div class="ratingrow">
                <span class="col1">3 Star</span>
                <div class="col2">
                  <div class="progress">
                    <div class="progress-bar" id="star3"></div>
                  </div>
                </div>
                <span class="col3">(2)</span>
              </div>
              <div class="ratingrow">
                <span class="col1">2 Star</span>
                <div class="col2">
                  <div class="progress">
                    <div class="progress-bar" id="star3"></div>
                  </div>
                </div>
                <span class="col3">(2)</span>
              </div>
              <div class="ratingrow">
                <span class="col1">1 Star</span>
                <div class="col2">
                  <div class="progress">
                    <div class="progress-bar " id="star1"></div>
                  </div>
                </div>
                <span class="col3">(2)</span>
              </div>
            </div>

            <br />
            <h5 class="mt-4 mb-4">Customer_reviews</h5>
           
            <div class="review-box ">
        <div class="review-header">
          <img src="https://i.pinimg.com/564x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg" alt="" />
            <div class="name-time">
                <div class="name">Miron Mahmud</div>
                <div class="time">25 minutes ago!</div>
            </div>
        </div>
        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
        <div class="review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.
        </div>
        <div class="reply-button">Reply</div>
    </div>
            <div class="review-box pad">
        <div class="review-header ">
          <img src="https://i.pinimg.com/564x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg" alt="" />
            <div class="name-time">
                <div class="name">Miron Mahmud</div>
                <div class="time">25 minutes ago!</div>
            </div>
        </div>
        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
        <div class="review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.
        </div>
        <div class="reply-button">Reply</div>
    </div>
            <div class="review-box ">
        <div class="review-header">
          <img src="https://i.pinimg.com/564x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg" alt="" />
            <div class="name-time">
                <div class="name">Miron Mahmud</div>
                <div class="time">25 minutes ago!</div>
            </div>
        </div>
        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
        <div class="review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.
        </div>
        <div class="reply-button">Reply</div>
    </div>
            <div class="review-box pad">
        <div class="review-header">
          <img src="https://i.pinimg.com/564x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg" alt="" />
            <div class="name-time">
                <div class="name">Miron Mahmud</div>
                <div class="time">25 minutes ago!</div>
            </div>
        </div>
        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
        <div class="review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.
        </div>
        <div class="reply-button">Reply</div>
    </div>
    <br />

    <h6 className="mt-4 mb-4">Review Reply Form</h6>
    <form action="" className="reviewForm"> <textarea placeholder="Write here"></textarea></form>
    {/* <Button className="btn-blue btn-lg clr"> Drop Your Reply</Button> */}
    <Button variant="contained"className="siz clr"><FaReply/>Drop Your Reply</Button>
    {/* <button> <span class="MuiTouchRipple-root css-w0pj6f"></span></button> */}

            {/* <div className="reviewsSecrion">
              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="userInfo d-flex">
                    <UserAvatarImgComponent img={'https://i.pinimg.com/564x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg'}/>

                      <div className="info">
                        <h6>Miron Mahmud</h6>
                        <span>25 minutes ago !</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="row">
            <div className="col-md-4">
             
              <img src={google} alt="" width="300px" />
            </div>

            <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">Formal suits for men wedding slim fit 3 piece dress business party jacket</h5>
            <p className="card-text"><strong>Brand:</strong> Ecstasy</p>
            <p className="card-text"><strong>Category:</strong> Man's</p>
            <p className="card-text"><strong>Tags:</strong> SUITE, PARTY, DRESS, SMART, MAN</p>
            <p className="card-text"><strong>Color:</strong> Red, Blue, White</p>
            <p className="card-text"><strong>Size:</strong> 68 Piece</p>
            <p className="card-text"><strong>Reviews:</strong> (03 Review)</p>
            <p className="card-text"><strong>Published:</strong> 02 Feb 2020</p>
          </div>
            </div>


          </div> */}
      </div>
    </>
  );
};

export default ProductDetails;

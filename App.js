import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.citypng.com/public/uploads/preview/fast-food-delivery-cartoon-character-logo-hd-transparent-png-735811696674987bnjkeubewg.png"
          alt="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const responseObj = {
  info: {
    id: "830418",
    name: "Indian Coffee House",
    cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
    locality: "Chhindwara City",
    areaName: "Khajri Chowk",
    costForTwo: "₹300 for two",
    cuisines: [
      "South Indian",
      "North Indian",
      "Chinese",
      "Fast Food",
      "Beverages",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "106448",
    avgRatingString: "4.4",
    totalRatingsString: "116",
    sla: {
      deliveryTime: 51,
      lastMileTravel: 12.7,
      serviceability: "SERVICEABLE",
      slaString: "50-55 mins",
      lastMileTravelString: "12.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-01-29 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-96e09fb5-aa15-4102-a09b-a3f2aa4275d5",
  },
  cta: {
    link: "https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const Card = (props) => {
  const { resData } = props;
  const cuisines = resData.info.cuisines;
  const cuisineString = cuisines.join(", ");
  const imgLink = "https://media-assets.swiggy.com/swiggy/image/upload/";
  return (
    <div className="resto-card">
      <img
        className="resto-img"
        src={imgLink + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="resto-name">{resData.info.name}</h3>
      <h4 className="cuisine-name">{cuisineString}</h4>
      <h4 className="star-rating">{resData.info.avgRating} stars</h4>
      <h4 className="delivery-time">{resData.info.costForTwo}</h4>
      <h4 className="delivery-time">{resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="resto-container">
        <Card resData={responseObj} />
        {/* <Card /> */}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

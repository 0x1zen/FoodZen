import Card from "./Card.js";
import responseList from "../utils/mockData.js";
// const responseObj = {
//   info: {
//     id: "830418",
//     name: "Indian Coffee House",
//     cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
//     locality: "Chhindwara City",
//     areaName: "Khajri Chowk",
//     costForTwo: "₹300 for two",
//     cuisines: [
//       "South Indian",
//       "North Indian",
//       "Chinese",
//       "Fast Food",
//       "Beverages",
//     ],
//     avgRating: 4.4,
//     veg: true,
//     parentId: "106448",
//     avgRatingString: "4.4",
//     totalRatingsString: "116",
//     sla: {
//       deliveryTime: 51,
//       lastMileTravel: 12.7,
//       serviceability: "SERVICEABLE",
//       slaString: "50-55 mins",
//       lastMileTravelString: "12.7 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2025-01-29 22:30:00",
//       opened: true,
//     },
//     badges: {
//       imageBadges: [
//         {
//           imageId: "v1695133679/badges/Pure_Veg111.png",
//           description: "pureveg",
//         },
//       ],
//     },
//     isOpen: true,
//     aggregatedDiscountInfoV2: {},
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {
//           badgeObject: [
//             {
//               attributes: {
//                 description: "pureveg",
//                 imageId: "v1695133679/badges/Pure_Veg111.png",
//               },
//             },
//           ],
//         },
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//     externalRatings: {
//       aggregatedRating: {
//         rating: "--",
//       },
//     },
//     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//   },
//   analytics: {
//     context: "seo-data-96e09fb5-aa15-4102-a09b-a3f2aa4275d5",
//   },
//   cta: {
//     link: "https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418",
//     text: "RESTAURANT_MENU",
//     type: "WEBLINK",
//   },
//   widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
// };

// const promiseApi = new Promise((resolve, reject) => {
//   const apiData =
//     "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
//   fetch(apiData)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("API call was not OK");
//       } else {
//         return response.json();
//       }
//     })
//     .then((data) => {
//       resolve(data);
//     })
//     .catch((error) => {
//       reject(`Error in fetching data: ${error.message}`);
//     });
// });
// promiseApi
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="resto-container">
        {responseList.map((restaurant, index) => (
          <Card key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

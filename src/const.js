import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import TwitterIcon from "@mui/icons-material/Twitter";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import {nanoid} from "nanoid";


export const tweetBoxIcon = [
  { Icon: InsertPhotoOutlinedIcon },
  { Icon: GifBoxOutlinedIcon },
  { Icon: BallotOutlinedIcon },
  { Icon: SentimentSatisfiedOutlinedIcon },
  { Icon: CalendarTodayTwoToneIcon },
  { Icon: FmdGoodOutlinedIcon },
];

export const sideBarIcons = [
  { active: "active", Icons: HomeIcon, text: "Home" },
  { Icons: SearchIcon, text: "Explore" },
  { Icons: NotificationsNoneIcon, text: "Notifications" },
  { Icons: MailOutlineIcon, text: "Messages" },
  { Icons: BookmarkBorderIcon, text: "Bookmarks" },
  { Icons: ListAltIcon, text: "Lists" },
  { Icons: PermIdentityIcon, text: "Profile" },
  { Icons: MoreHorizIcon, text: "More" },
];

export const dateArray = Array(31)
  .fill(0)
  .map((ele, index) => ele + index);
export const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "Auguest",
  "September",
  "October",
  "November",
  "December",
];
export const yearArray = Array(25)
  .fill(2000)
  .map((year, index) => year + index);
export const whomfollow = [
  {
    followName: "Recycle India",
    followUserName: "@recycleIndia",
    folloDesignation: "Recycle India official",
    isFollow: false,
  },
  {
    followName: "Elon Musk",
    followUserName: "@Mr.Twitter",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "Lata Mangeshkar",
    followUserName: "@IamLmangeshkar",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn3",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn4",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn5",
    folloDesignation: "indian govenment official",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn6",
    folloDesignation: "indian govenment official",
    isFollow: false,
  },
];

export const trendinsData = [
  {
    id: 1,
    trender: "#Shahrukh khan",
    tweets: "102k",
    isNotIntrested: false,
  },
  {
    id: 2,
    trender: "#Pathan",
    tweets: "30k",
    isNotIntrested: false,
  },
  {
    id: 3,
    trender: "#BioDiversity",
    tweets: "12k",
    isNotIntrested: false,
  },
  {
    id: 4,
    trender: "#SRK",
    tweets: "30k",
    isNotIntrested: false,
  },
  {
    id: 5,
    trender: "#Dipika",
    tweets: "102k",
    isNotIntrested: false,
  },
  {
    id: 6,
    trender: "#IPL",
    tweets: "300k",
    isNotIntrested: false,
  },
];

export const whatsHappenigData = [
  {
    id: 1,
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotIntrested: false,
  },
  {
    id: 2,
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotIntrested: false,
  },
  {
    id: 3,
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotIntrested: false,
  },
  {
    id: 4,
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotIntrested: false,
  },
  {
    id: 5,
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotIntrested: false,
  },
  {
    id: 6,
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotIntrested: false,
  },
  {
    id: 7,
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotIntrested: false,
  },
  {
    id: 8,
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotIntrested: false,
  },
  {
    id: 9,
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotIntrested: false,
  },
];



export const tweetPosts = [
  {
    profilePic:
      "https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080",
    name: "The White House",
    verified: true,
    handlerName: "@TheWhiteHouse",
    organization: "United States government organization",
    followers: 200,
    followings: 400,
    email:"whitehouse@gmail.com",
    password:"password",
    joinedDate: "22 dec 2022",
    tweets: [
      {
        tweetid: 1,
        tweetText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        tweetPic:
          "https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080",
        tweetCount: 100,
        retweetCount: 100,
        likesCount: 100,
        viewsCount: "102k",
        TweetReplies: [
          {
            name: "Arjun ranavat",
            handlerName: "@Arjun6787",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "charls Darvin",
            handlerName: "@charls",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
    name: "Mukund",
    handlerName: "@kumarmukund",
    organization: "",
    followers: 200,
    followings: 400,
    joinedDate: "22 dec 2022",
    tweets: [
      {
        tweetid: 1,
        tweetText:
          "For someone to live another has to die. That is wildlife. My shot that was featured in NatGeo. Shot using @NikonIndia gear.",
        tweetPic:
          "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
        tweetCount: 200,
        retweetCount: 200,
        likesCount: 200,
        viewsCount: "10k",
        hastags: ["#wildLife", "#photoGraphy"],
        TweetReplies: [
          {
            name: "Karan kumar",
            handlerName: "@Kkumar",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "Darshan patra",
            handlerName: "@patraD7898",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/pasZP7Q7djnEfYziWLb-U5F1Ga_YpGXbxoggi_H3YuCFZeXPBij6l7SuJRnh39osyU0omD-OON3O9w46qNWJ7eFhNwo1LOe0PU7gANdMGHNYgo6mPlIVJKk1AoJJVy2D7bptiaUqpw=w1920-h1080",
    name: "Usain St. Leo Bolt",
    handlerName: "@usainbolt",
    organization: "",
    followers: 200,
    followings: 400,
    joinedDate: "22 dec 2022",
    tweets: [
      {
        tweetid: 1,
        tweetText: "Earned..Not Given.",
        tweetPic:
          "https://lh3.googleusercontent.com/pasZP7Q7djnEfYziWLb-U5F1Ga_YpGXbxoggi_H3YuCFZeXPBij6l7SuJRnh39osyU0omD-OON3O9w46qNWJ7eFhNwo1LOe0PU7gANdMGHNYgo6mPlIVJKk1AoJJVy2D7bptiaUqpw=w1920-h1080",
        tweetCount: 700,
        retweetCount: 700,
        likesCount: 900,
        viewsCount: "100k",
        refLink: "https://www.globalwildlife.org/blog/",
        TweetReplies: [
          {
            name: "Akshay chaudari",
            handlerName: "@AC",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "Sujeet mandale",
            handlerName: "@Er_Sujeet",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/4aSGO7MxlG112HGNyNS05HcVDtz7XAC8bUlieGaFHSyCMYJh8GVRR17I5OhcyVvxWWjR9-Ibu4vgmZhRe6rcPfJT-qAFi6TvTDAlXpLu_vooIsm3CMdTdB7JMYvheeI9474Fy9ZxFw=w1920-h1080",
    name: "Andrew Elliott",
    handlerName: "@andrewje_home",
    organization: "",
    followers: 200,
    followings: 400,
    joinedDate: "22 dec 2022",

    tweets: [
      {
        tweetText: "Stolen.. Not earned. ",
        tweetPic:
          "https://lh3.googleusercontent.com/4aSGO7MxlG112HGNyNS05HcVDtz7XAC8bUlieGaFHSyCMYJh8GVRR17I5OhcyVvxWWjR9-Ibu4vgmZhRe6rcPfJT-qAFi6TvTDAlXpLu_vooIsm3CMdTdB7JMYvheeI9474Fy9ZxFw=w1920-h1080",
        tweetCount: 400,
        retweetCount: 327,
        tweetid: 1,
        likesCount: 90,
        viewsCount: "7k",
        hastags: ["#sports", "#Winners"],
        TweetReplies: [
          {
            name: "Rajan kashyap",
            tweetid: 1,
            handlerName: "@kashyapR",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "Shreyash",
            handlerName: "I_am_shreyash",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/Jt-Vf0_wj_T3HgLPsjJz-sqzds1WB_nxZR1BRG_Fy2MetPgymruJINllajLUWA9KhYdScF_ZIgbl-4ZrGw4DFI5Y4q3uImG5_-H4okqGh4Lo14AB4Fwhx8lUqSWhfaYuDVI1Qd-CHg=w1920-h1080",
    name: "RVCJ Media",
    handlerName: "@RVCJ_FB",
    organization: "",
    followers: 200,
    followings: 400,
    joinedDate: "22 dec 2022",
    tweets: [
      {
        tweetid: nanoid(),
        tweetText: "Well Played Team India ",
        tweetPic:
          "https://lh3.googleusercontent.com/Jt-Vf0_wj_T3HgLPsjJz-sqzds1WB_nxZR1BRG_Fy2MetPgymruJINllajLUWA9KhYdScF_ZIgbl-4ZrGw4DFI5Y4q3uImG5_-H4okqGh4Lo14AB4Fwhx8lUqSWhfaYuDVI1Qd-CHg=w1920-h1080",
        tweetCount: 650,
        retweetCount: 699,
        likesCount: 900,
        viewsCount: "17k",
        hastags: ["#HockeyLover", "#Hockey", "#Team India"],
        TweetReplies: [
          {
            name: "Durgen",
            handlerName: "@Mess_owner",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            name: "charls Darvin",
            handlerName: "@charls",
            tweetReplyText:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ],
      },
    ],
  },
];

export const tweetList = [
  {
    profilePic:
      "https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080",
    name: "The White House",
    verified: true,
    handlerName: "@TheWhiteHouse",
    tweetid: 1,
    tweetText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    tweetPic:
      "https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080",
    retweetCount: 100,
    likesCount: 100,
    viewsCount: "102k",
    tweetReplies: [],
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
    name: "Mukund",
    handlerName: "@kumarmukund",
    tweetid: 1,
    tweetText:
      "For someone to live another has to die. That is wildlife. My shot that was featured in NatGeo. Shot using @NikonIndia gear.",
    tweetPic:
      "https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080",
    retweetCount: 200,
    likesCount: 200,
    viewsCount: "10k",
    hastags: ["#wildLife", "#photoGraphy"],
    tweetReplies: [],
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/pasZP7Q7djnEfYziWLb-U5F1Ga_YpGXbxoggi_H3YuCFZeXPBij6l7SuJRnh39osyU0omD-OON3O9w46qNWJ7eFhNwo1LOe0PU7gANdMGHNYgo6mPlIVJKk1AoJJVy2D7bptiaUqpw=w1920-h1080",
    name: "Usain St. Leo Bolt",
    handlerName: "@usainbolt",
    tweetid: 1,
    tweetText: "Earned..Not Given.",
    tweetPic:
      "https://lh3.googleusercontent.com/pasZP7Q7djnEfYziWLb-U5F1Ga_YpGXbxoggi_H3YuCFZeXPBij6l7SuJRnh39osyU0omD-OON3O9w46qNWJ7eFhNwo1LOe0PU7gANdMGHNYgo6mPlIVJKk1AoJJVy2D7bptiaUqpw=w1920-h1080",
    retweetCount: 700,
    likesCount: 900,
    viewsCount: "100k",
    tweetReplies: [],
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/4aSGO7MxlG112HGNyNS05HcVDtz7XAC8bUlieGaFHSyCMYJh8GVRR17I5OhcyVvxWWjR9-Ibu4vgmZhRe6rcPfJT-qAFi6TvTDAlXpLu_vooIsm3CMdTdB7JMYvheeI9474Fy9ZxFw=w1920-h1080",
    name: "Andrew Elliott",
    handlerName: "@andrewje_home",
    organization: "",
    tweetid: 1,
    tweetText: "Stolen.. Not earned. ",
    tweetPic:
      "https://lh3.googleusercontent.com/4aSGO7MxlG112HGNyNS05HcVDtz7XAC8bUlieGaFHSyCMYJh8GVRR17I5OhcyVvxWWjR9-Ibu4vgmZhRe6rcPfJT-qAFi6TvTDAlXpLu_vooIsm3CMdTdB7JMYvheeI9474Fy9ZxFw=w1920-h1080",
    retweetCount: 327,
    likesCount: 90,
    viewsCount: "7k",
    hastags: ["#sports", "#Winners"],
  },
];
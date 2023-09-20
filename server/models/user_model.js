import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    followers: {
      type: Array,
      default: [],
    },

    following: {
      type: Array,
      default: [],
    },
    instruments: {
      type: [String],
    },
    genres: {
      type: [String],
    },
    location: {
      country: {
        type: String,
        default: "",
      },
      region: {
        type: String,
        default: "",
      },
    },
    bio: {
      type: String,
      default: "",
    },
    coverImage: {
      type: String,
      default: "",
    },
    profileImage: {
      type: String,
      default: "",
    },
    imageGallery: [
      {
        type: String,
        default: "",
      },
    ],
    sampleMusic: [
      {
        type: String,
        default: "",
      },
    ],
    videoGallery: [
      {
        type: String,
        default: "",
      },
    ],
    gigsCompleted: {
      type: Number,
      default: 0,
    },
    // sponsors: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Sponsors",
    //   },
    // ],
    // reviews: [
    //   {
    //     rating: {
    //       type: Number,
    //       min: 1,
    //       max: 5,
    //       required: true,
    //     },
    //     comment: {
    //       type: String,
    //       required: true,
    //     },
    //     author: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "User",
    //       required: true,
    //     },
    //   },
    // ],
    // connections: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
    // posts: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Post",
    //   },
    // ],
    // gigs: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Gigs",
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);

import mongoose from "mongoose";
const { Schema } = mongoose;

const GigsSchema = new Schema(
  {
    gigs: [
      {
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
        time: {
          type: String,
          required: true,
        },
        venue: {
          type: String,
          required: true,
        },
        cost: {
          type: Number,
          required: true,
        },
        applications: [
          {
            musician: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
              required: true,
            },
            application: {
              type: String,
              required: true,
            },
            links: [
              {
                type: String,
              },
            ],
            samples: [
              {
                type: String,
              },
            ],
            bid: {
              type: Number,
              required: true,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gigs", GigsSchema);

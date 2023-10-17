import connect from "@/db/connect.js";
import Pet from "@/db/models/Pet.js";
import Rating from "@/db/models/Rating.js";
import User from "@/db/models/User.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const pet = await Pet.findById(request.query.id)
      .populate({
        path: "ratings",
        populate: {
          path: "user",
        },
      })
      .exec();
    if (!pet) {
      response.status(404).json({ message: "Pet not found" });
      return;
    }
    response.status(200).json(pet);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
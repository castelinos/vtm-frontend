import * as z from "zod";

export const VehicleValidation = z.object({
  image: z.any(),
  vehicle_no: z.string().min(4).max(10),
  vehicle_type: z.string().min(4).max(20),
  brand_name: z.string().min(4).max(20) ,
  owner_id: z.string().min(4).max(30) ,
  owner_type: z.string().min(4).max(10) ,
  cert_puc: z.any(), // can further be developed to validate files 
  cert_insurance: z.any(), // can further be developed to validate files 
});

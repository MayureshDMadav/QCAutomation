/**
 * Fetches various configuration data from the GoKwik API and returns a JSON response.
 *
 * This function makes four separate API requests to fetch the following data:
 * - Basic configuration
 * - Main configuration
 * - Merchant credentials
 * - Merchant trackers
 *
 * If any of the API requests fail, the function will throw an error with the appropriate status and error message.
 *
 * @returns {Promise<Response>} A JSON response containing the fetched configuration data.
 */


export async function GET() {
  const merchantId = "19g6iluteahb9"
  const authToken = "53616c7465645f5fd0e2898a84b0e520e6360e7a57b89d9864e6d1537450d33304d6fa479d5c9e38c41188355b9b51370702a3b8f454cc44f5db61b4f6b9f3073027106af1156b742c237c64fcdec06a1fbfc9442772f1300203b0a951a66a8ddaeb107eb3d0ab3bd11e5a4b0cb7147e64fbcda50323d2b8e0f92c8c973ce9ff67216b128124c6cd5d371ce4be8480296025c247c5739d8de8edc8f6efd802fde10e9dc9d21b85c189ceda3b2e2d18a9171b47c90de0435e9eae99c90d1ff5e5048fbb6fe2a61f4b0d3373a3e6fddd56069db508f904a07c02271eddd78c97366ff7c407be28362c0233e3619ee2509d823a375c47e771e7f38dbfbe02363155eef0165fbc7193a0b07c27cd30ddeb74ea1767d647b91417159f6d69c11b777e5c52c96b60edd3bb6a22f7780b7ec104fc99b0e7278d1cc91530342731ce490c3099325931987b45cf7863c20b576560756ac947269adcd9b742b2c2c6ab78ab82684cea5d363595eca3642081a9ea082d8ced3a6b24e1f43bb9e875ecd85b93aad7c763a745d01243f31c8109a98c9b17310eb13bce43c356ff7f71eaec406b"

  try {
    const res = await fetch(`https://portal-api.gokwik.co/api/merchant/${merchantId}`, {
      headers: {
        accept: "application/json, text/plain, */*",
        authorization: authToken,
      },
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch basic config: ${res.status} ${res.statusText}`);
    }

    const res1 = await fetch(`https://portal-api.gokwik.co/api/merchant/merchant-config/${merchantId}`, {
      headers: {
        accept: "application/json, text/plain, */*",
        authorization: authToken,
      },
      method: "GET",
    });

    if (!res1.ok) {
      throw new Error(`Failed to fetch main config: ${res1.status} ${res1.statusText}`);
    }

    const res2 = await fetch(`https://portal-api.gokwik.co/api/merchant/cred/${merchantId}`, {
      headers: {
        accept: "application/json, text/plain, */*",
        authorization: authToken,
      },
      method: "GET",
    });

    if (!res2.ok) {
      throw new Error(`Failed to fetch credentials: ${res2.status} ${res2.statusText}`);
    }

    const res3 = await fetch(`https://portal-api.gokwik.co/api/merchant/tracker/${merchantId}`, {
      headers: {
        accept: "application/json, text/plain, */*",
        authorization: authToken,
      },
      method: "GET",
    });

    if (!res3.ok) {
      throw new Error(`Failed to fetch trackers: ${res3.status} ${res3.statusText}`);
    }

    const basic_config = await res.json();
    const main_config = await res1.json();
    const credentials = await res2.json();
    const trackers = await res3.json();

    return Response.json({ basic_config, main_config, credentials, trackers });
  } catch (error) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}

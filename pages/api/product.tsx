export default async function handler(req:any, res:any) {
    // const { pageSize = 12, skip = 0 } = req.query;
  
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      const data = await response.json();
      console.log(response,"response");
    //   res.status(200).json(data);
    } catch (error:any) {
    //   console.error('Error:', error.message);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }
  
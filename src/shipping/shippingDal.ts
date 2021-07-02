import * as dbConnection from "../infrastructure/dbConnection";
export async function selectall() {
    let client;
    try {
        client = await dbConnection.getDbClientConnection();
        const queries = "SELECT * FROM shippings";
        const result = client.query(queries);
        console.log(result);
    } catch (error) {
        console.log(error)
    }
    finally {
        client.end();
    }
}
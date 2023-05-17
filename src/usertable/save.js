import { useBlockProps } from "@wordpress/block-editor";
const save = ({ attributes: { tabledata, tabletitle } }) => {

    return (
        <div {...useBlockProps.save()} className="font-Outfit">
            <div className="font-Outfit">
                <h2 className="text-center mb-6 font-bold">{tabletitle}</h2>
                <div className="flex w-full justify-end mb-4">
                    <input type="text" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Serach By User Name" />
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Username
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Email
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Address
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Phone
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Website
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Company
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Extra Field
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody id="usertable" >
                            {
                                Array.isArray(tabledata) && tabledata.map((table, index) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {table.name}
                                        </th>
                                        <td className="px-6 py-4">{table.username}</td>
                                        <td className="px-6 py-4">{table.email}</td>
                                        <td className="px-6 py-4">{`${table.address.street}, ${table.address.suite}, ${table.address.city}, ${table.address.zipcode},Lang:${table.address.geo.lat} Lat:${table.address.geo.lng}`}</td>
                                        <td className="px-6 py-4">{table.phone}</td>
                                        <td className="px-6 py-4"><a target="_blank" href={`http://${table.website}`}>{table.website}</a></td>
                                        <td className="px-6 py-4">{`${table.company.name},${table.company.catchPhrase},${table.company.bs}`}</td>
                                        <td className="px-6 py-4">
                                            {table.extrafield}
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default save
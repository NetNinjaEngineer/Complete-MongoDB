// get all documents
db.users.find()

// insert one document
db.users.insertOne({ name: 'Mohamed', age: 22, gender: 'Male' })

// insert many documents
db.users.insertMany([
    { name: 'Ahmed', age: 22, gender: 'Male' },
    { name: 'sara', age: 20, gender: 'Female' },
    { name: 'salama', age: 32, gender: 'Male' },
    { name: 'Rana', age: 22, gender: 'Female' }
])

// get the first document in the collection
db.users.findOne()

// get all the documents that the gender is male
db.users.find({ gender: 'Male' })

// get the first document that gender is male and age is 22
db.users.findOne({ gender: 'Male', age: 22 })

// projection
// get all male users and exclude the id and age fields
db.users.find({ gender: 'Male' }, { _id: false, age: false })

// get the document that with id 67bd96615245de18bc4d7942
db.users.findOne({ _id: ObjectId('67bd96615245de18bc4d7942') })
// update the document with id  ObjectId('67bd96615245de18bc4d7942')
// update one document requires filter object the second argument is the new object to update with the old one
db.users.updateOne({ _id: ObjectId('67bd96615245de18bc4d7942') }, { $set: { age: 30 } })

// update the users with name is Mohamed
db.users.find({ name: 'Mohamed' })
// this is will update the first document that match the criteria although this filter condition returns more than one document
db.users.updateOne({ name: 'Mohamed' }, { $set: { age: 20 } })

// update all documents that the age is 22 set the age 50
// get all users with age is 22
db.users.find({ age: 22 })
db.users.updateMany({ age: 22 }, { $set: { age: 50 } })

// update all users set the city to london
// note ==> if the documents does not have the city field it will add the city field to the documents with 'london' value
db.users.updateMany({ gender: 'Male' }, { $set: { city: 'london' } })
db.users.updateMany({ gender: 'Female' }, { $set: { city: 'london' } })

// replace existing document with new one
db.users.replaceOne(
    { _id: ObjectId('67bd96615245de18bc4d7942') },
    { name: 'mahmoud', age: 50, city: 'cairo', country: 'egypt' }
)

// delete one document with id is  '67bd96615245de18bc4d7942'
db.users.deleteOne({ _id: ObjectId('67bd96615245de18bc4d7942') })

// delete the first document in users collection without passing filteration cirteria
db.users.deleteOne({})

// delete all documents with the gender is male
db.users.deleteMany({ gender: 'Male' })

// delete all documents by passing empty filter object
db.users.deleteMany({})

db.users.insertMany([
    { _id: 1, name: 'mohamed', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 2, name: 'ahmed', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 3, name: 'ali', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 4, name: 'kareem', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 5, name: 'rana', age: 31, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 6, name: 'mai', age: 40, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 7, name: 'salma', age: 25, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 8, name: 'yousef', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 9, name: 'samy', age: 19, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 10, name: 'mahmoud', age: 32, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 11, name: 'hassan', age: 50, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 12, name: 'abdelrahman', age: 30, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 13, name: 'fawzy', age: 17, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 14, name: 'mostafa', age: 18, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 15, name: 'reem', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 16, name: 'tasneem', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 17, name: 'ghada', age: 10, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 18, name: 'eslam', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 19, name: 'rokia', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 20, name: 'yasmeen', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 22, name: 'walid', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 23, name: 'mohab', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 24, name: 'basma', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 25, name: 'salama', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 26, name: 'moktar', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 27, name: 'ramadan', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 28, name: 'abdelhaleem', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 29, name: 'aya', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 30, name: 'alaa', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 31, name: 'adham', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 32, name: 'adam', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 33, name: 'emad', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 34, name: 'hossam', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 35, name: 'doaa', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 36, name: 'hoda', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 37, name: 'ebtesam', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 38, name: 'fatma', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 39, name: 'hala', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 40, name: 'rahma', age: 22, gender: 'female', city: 'cairo', country: 'egypt' },
    { _id: 41, name: 'khaled', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
    { _id: 42, name: 'adel', age: 22, gender: 'male', city: 'cairo', country: 'egypt' },
])


// cursor in mongo db is a pointer to a result set of the query allows to iterate
// over the results one document at a time rather than fetching all the results
// at one time this is usefull when dealing with a large dataset that is prevents
// memory overload and improves the performance
// db.users.find() ===> it returns a cursor to a set of data

db.users.find() // returns the first cursor with count 20 documents by default
db.users.find().toArray() // returns all documents in the collection ==> when the first cursor
// is received the toArray() method it will send a request to get the second cursor and so one 
// to get all the data

// forEach() ==> is a cursor with the same functionality with toArray plus it transforming the result as we need
// it takes a callback function that transforming each document in the colletion
db.users.find().forEach(function (user) {
    print('user name: ' + user.name)
})

// note ==> can not call pretty() method on the findOne() because findOne() not returns
// a cursor findOne() returns one doument from the collection based on filter object

// cursor benefits
// it saves the network bandwidth 
// improve performance of the application as the data is fetched in a small chunks
// prevents huge data processing and the application from crashing


// BSON DataTypes (Binary Json)
//String - Boolean - Number - ObjectId - Array - RegEx - Binary - Null - JS Code - Object - Date
// Number ==> Int32 - Int64 - Double - Decimal
// Date ==> ISODate - Timestamp

// ISODate ==> its stores the date and the time
// Timestamp ==> its stores the date in milliseconds

// ObjectId ==> 12 byte value that combines a timestamp, machine identifier, process identifier
// incrementing a counter to generate the objectid this combination it insures the uniqueness
// and order the document insertion

// BinData ==> its a datatype to store binary data like images, files

db.users.insertOne({
    name: 'Mohamed Ehab',
    age: 22,
    isAdmin: true,
    dob: ISODate('2002-12-10'),
    createdAt: new Timestamp(),
    address: null,
    gender: 'male',
    hobbies: undefined
})




db.users.insertMany(
    [
        {
            "name": "Ahmed Khaled",
            "age": 28,
            "is_active": true,
            "subscription_type": {
                "type": "monthly",
                "renewal_date": {
                    "day": 12,
                    "month": 9,
                    "year": 2024
                }
            },
            "address": ["Cairo", "Egypt"],
            "purchases": [
                { "product_name": "Samsung Galaxy S23", "brand": "Samsung" },
                { "product_name": "Dell XPS 15", "brand": "Dell" }
            ]
        },
        {
            "name": "Mohamed ElHelaly",
            "age": 32,
            "is_active": true,
            "subscription_type": {
                "type": "yearly",
                "renewal_date": {
                    "day": 25,
                    "month": 6,
                    "year": 2025
                }
            },
            "address": ["Alexandria", "Egypt"],
            "purchases": [
                { "product_name": "iPhone 15", "brand": "Apple" },
                { "product_name": "MacBook Air", "brand": "Apple" }
            ]
        },
        {
            "name": "Omar Saeed",
            "age": 30,
            "is_active": false,
            "subscription_type": {
                "type": "monthly",
                "renewal_date": {
                    "day": 5,
                    "month": 8,
                    "year": 2024
                }
            },
            "address": ["Riyadh", "Saudi Arabia"],
            "purchases": [
                { "product_name": "Google Pixel 7", "brand": "Google" },
                { "product_name": "Asus ROG Strix", "brand": "Asus" }
            ]
        },
        {
            "name": "Youssef Ibrahim",
            "age": 27,
            "is_active": true,
            "subscription_type": {
                "type": "yearly",
                "renewal_date": {
                    "day": 10,
                    "month": 1,
                    "year": 2025
                }
            },
            "address": ["Dubai", "UAE"],
            "purchases": [
                { "product_name": "PlayStation 5", "brand": "Sony" },
                { "product_name": "LG OLED TV", "brand": "LG" }
            ]
        },
        {
            "name": "Hassan Mustafa",
            "age": 35,
            "is_active": false,
            "subscription_type": {
                "type": "monthly",
                "renewal_date": {
                    "day": 20,
                    "month": 7,
                    "year": 2024
                }
            },
            "address": ["Istanbul", "Turkey"],
            "purchases": [
                { "product_name": "iPad Pro", "brand": "Apple" },
                { "product_name": "Bose Headphones", "brand": "Bose" }
            ]
        },
        {
            "name": "Ali Mansour",
            "age": 40,
            "is_active": true,
            "subscription_type": {
                "type": "yearly",
                "renewal_date": {
                    "day": 3,
                    "month": 5,
                    "year": 2025
                }
            },
            "address": ["Casablanca", "Morocco"],
            "purchases": [
                { "product_name": "Amazon Kindle", "brand": "Amazon" },
                { "product_name": "Sony WH-1000XM5", "brand": "Sony" }
            ]
        },
        {
            "name": "Karim Nasser",
            "age": 31,
            "is_active": true,
            "subscription_type": {
                "type": "monthly",
                "renewal_date": {
                    "day": 15,
                    "month": 9,
                    "year": 2024
                }
            },
            "address": ["Doha", "Qatar"],
            "purchases": [
                { "product_name": "Surface Laptop 5", "brand": "Microsoft" },
                { "product_name": "GoPro Hero 12", "brand": "GoPro" }
            ]
        },
        {
            "name": "Amr Fathy",
            "age": 29,
            "is_active": false,
            "subscription_type": {
                "type": "yearly",
                "renewal_date": {
                    "day": 18,
                    "month": 3,
                    "year": 2025
                }
            },
            "address": ["Kuwait City", "Kuwait"],
            "purchases": [
                { "product_name": "Xbox Series X", "brand": "Microsoft" },
                { "product_name": "Samsung Galaxy Tab S9", "brand": "Samsung" }
            ]
        },
        {
            "name": "Ahmed Tarek",
            "age": 26,
            "is_active": true,
            "subscription_type": {
                "type": "monthly",
                "renewal_date": {
                    "day": 5,
                    "month": 10,
                    "year": 2024
                }
            },
            "address": ["Cairo", "Egypt"],
            "purchases": [
                { "product_name": "iPhone 14", "brand": "Apple" },
                { "product_name": "Sony PlayStation 5", "brand": "Sony" }
            ]
        },
        {
            "name": "Mohamed ElHelaly",
            "age": 32,
            "is_active": true,
            "subscription_type": {
                "type": "yearly",
                "renewal_date": {
                    "day": 20,
                    "month": 7,
                    "year": 2025
                }
            },
            "address": ["Alexandria", "Egypt"],
            "purchases": [
                { "product_name": "MacBook Pro", "brand": "Apple" },
                { "product_name": "Samsung Galaxy S24", "brand": "Samsung" }
            ]
        },
        {
            "name": "Omar Galal",
            "age": 30,
            "is_active": false,
            "subscription_type": {
                "type": "monthly",
                "renewal_date": {
                    "day": 8,
                    "month": 11,
                    "year": 2024
                }
            },
            "address": ["Riyadh", "Saudi Arabia"],
            "purchases": [
                { "product_name": "Google Pixel 8", "brand": "Google" },
                { "product_name": "Dell XPS 13", "brand": "Dell" }
            ]
        },
        {
            "name": "Youssef Hassan",
            "age": 29,
            "is_active": true,
            "subscription_type": {
                "type": "yearly",
                "renewal_date": {
                    "day": 12,
                    "month": 1,
                    "year": 2025
                }
            },
            "address": ["Dubai", "UAE"],
            "purchases": [
                { "product_name": "PlayStation 5", "brand": "Sony" },
                { "product_name": "Bose SoundLink", "brand": "Bose" }
            ]
        },
        {
            "name": "Hassan Ahmed",
            "age": 37,
            "is_active": false,
            "subscription_type": {
                "type": "monthly",
                "renewal_date": {
                    "day": 22,
                    "month": 6,
                    "year": 2024
                }
            },
            "address": ["Istanbul", "Turkey"],
            "purchases": [
                { "product_name": "iPad Air", "brand": "Apple" },
                { "product_name": "JBL Speaker", "brand": "JBL" }
            ]
        },
        {
            "name": "Ali Fawzy",
            "age": 41,
            "is_active": true,
            "subscription_type": {
                "type": "yearly",
                "renewal_date": {
                    "day": 4,
                    "month": 4,
                    "year": 2025
                }
            },
            "address": ["Casablanca", "Morocco"],
            "purchases": [
                { "product_name": "Amazon Kindle", "brand": "Amazon" },
                { "product_name": "Sony WH-1000XM4", "brand": "Sony" }
            ]
        },
        {
            "name": "Karim Nabil",
            "age": 33,
            "is_active": true,
            "subscription_type": {
                "type": "monthly",
                "renewal_date": {
                    "day": 17,
                    "month": 9,
                    "year": 2024
                }
            },
            "address": ["Doha", "Qatar"],
            "purchases": [
                { "product_name": "Surface Laptop Studio", "brand": "Microsoft" },
                { "product_name": "Canon EOS R5", "brand": "Canon" }
            ]
        },
        {
            "name": "Amr Samir",
            "age": 28,
            "is_active": false,
            "subscription_type": {
                "type": "yearly",
                "renewal_date": {
                    "day": 15,
                    "month": 3,
                    "year": 2025
                }
            },
            "address": ["Kuwait City", "Kuwait"],
            "purchases": [
                { "product_name": "Xbox Series S", "brand": "Microsoft" },
                { "product_name": "Samsung Galaxy Watch 6", "brand": "Samsung" }
            ]
        },
        {
            "name": "Mostafa Adel",
            "age": 34,
            "is_active": true,
            "subscription_type": {
                "type": "monthly",
                "renewal_date": {
                    "day": 9,
                    "month": 12,
                    "year": 2024
                }
            },
            "address": ["Muscat", "Oman"],
            "purchases": [
                { "product_name": "DJI Mini 3 Pro", "brand": "DJI" },
                { "product_name": "Bose QuietComfort Earbuds", "brand": "Bose" }
            ]
        },
        {
            "name": "Mahmoud Essam",
            "age": 36,
            "is_active": false,
            "subscription_type": {
                "type": "yearly",
                "renewal_date": {
                    "day": 21,
                    "month": 2,
                    "year": 2025
                }
            },
            "address": ["Amman", "Jordan"],
            "purchases": [
                { "product_name": "Sony Bravia 4K TV", "brand": "Sony" },
                { "product_name": "Logitech MX Master 3S", "brand": "Logitech" }
            ]
        }
    ]

)


// get active users
db.users.find({ is_active: true })

// query the users collection using arrays
// get the users lives in Turkey

db.users.find({ address: 'Turkey' })

// update the address for Mostafa Adel ==> set to Cairo - Egypt
db.users.updateOne({ name: 'Mostafa Adel' }, { $set: { address: ['Cairo', 'Egypt'] } })

// get all users where the product brand is apple
db.users.find({ "purchases.brand": 'Apple' })


// get all users documents where address array contains UK, USA, Egypt
db.users.find({ address: { $in: ['UK', 'USA', 'Egypt'] } })

// get all users documents where not in UK, USA, Egypt
db.users.find({ address: { $nin: ['UK', 'USA', 'Egypt'] } })

// get all users in Cairo, Egypt
db.users.find({ address: { $all: ['Cairo', 'Egypt'] } })

// embeded document ===> is a document is assigned to a field of another document
// it is nested inside another document


// get users where subscription type is monthly
db.users.find({ "subscription_type.type": 'monthly' })

// update an embeded document
db.users.findOne({ _id: ObjectId('67c31bae1e062a24824d7953') })
db.users.updateOne({ _id: ObjectId('67c31bae1e062a24824d7953') }, { $set: { "subscription_type.type": 'hamboozo' } })

// update the renewwal_date
db.users.updateOne(
    { _id: ObjectId('67c31bae1e062a24824d7953') },
    { $set: { "subscription_type.renewal_date.year": 2030 } })

// access the values of embeded document
// get the year of subscription type for '67c31bae1e062a24824d7953'
db.users.findOne({ _id: ObjectId('67c31bae1e062a24824d7953') }).subscription_type.renewal_date.year
// get the purchases array of objects
db.users.findOne({ _id: ObjectId('67c31bae1e062a24824d7953') }).purchases
db.users.findOne({ _id: ObjectId('67c31bae1e062a24824d7953') }).address

// to make a relationships between documents
// 1- Embeded documents
// 2- Referencing

// First Approach (Embeded documents)
// Advantages
// all the information is a vailable in the same document
// we not have to query multiple collections to get the related data
// this is makes query faster and improve the performance

// Disadvantages
// 1- this can lead to a redundant or duplicate data in the collection
// 2- higher network bandwidth
// 3- the maximum size of the document is 16MB, since the all information in the same document
// this can exceeded max length of the document

// Second Approach (Referencing)
// Advantages
// 1- No Redundant data at all
// 2- documents is less than 16MB


// Disadvantags
// 1- to fetch all data you need to query multiple collections this can lead to
// affect the performance of the application



// When to use embeded documents to represent the relationship
// Check
// 1- Related Data size
// 2- Data Redundancy
// 3- Data Growth Frequency
// 4- Closness of the relation
// 5- Frequency of Read / Write

// When to use referencing

db.users.insertMany([
    {
        "name": "Alice Johnson",
        "gender": "female",
        "date_of_birth": "15-05-1995",
        "primary_contact": {
            "email": "alice@example.com",
            "phone": 9876543210
        },
        "address": [
            "Los Angeles",
            "USA"
        ]
    },
    {
        "name": "Bob Smith",
        "gender": "male",
        "date_of_birth": "22-11-1988",
        "primary_contact": {
            "email": "bobsmith@example.com",
            "phone": 9234567890
        },
        "address": [
            "London",
            "UK"
        ]
    },
    {
        "name": "Charlie Davis",
        "gender": "male",
        "date_of_birth": "10-07-1992",
        "primary_contact": {
            "email": "charlie.davis@example.com",
            "phone": 8765432109
        },
        "address": [
            "Toronto",
            "Canada"
        ]
    },
    {
        "name": "Diana Prince",
        "gender": "female",
        "date_of_birth": "25-12-1985",
        "primary_contact": {
            "email": "diana@example.com",
            "phone": 9654321098
        },
        "address": [
            "Paris",
            "France"
        ]
    },
    {
        "name": "Edward Wilson",
        "gender": "male",
        "date_of_birth": "03-04-1990",
        "primary_contact": {
            "email": "edward.wilson@example.com",
            "phone": 8123456789
        },
        "address": [
            "Berlin",
            "Germany"
        ]
    },
    {
        "name": "Fiona Green",
        "gender": "female",
        "date_of_birth": "17-08-1996",
        "primary_contact": {
            "email": "fiona@example.com",
            "phone": 7012345678
        },
        "address": [
            "Madrid",
            "Spain"
        ]
    },
    {
        "name": "George Brown",
        "gender": "male",
        "date_of_birth": "09-06-1993",
        "primary_contact": {
            "email": "george.brown@example.com",
            "phone": 6234567890
        },
        "address": [
            "Rome",
            "Italy"
        ]
    },
    {
        "name": "Hannah White",
        "gender": "female",
        "date_of_birth": "14-09-1994",
        "primary_contact": {
            "email": "hannah.white@example.com",
            "phone": 5345678901
        },
        "address": [
            "Tokyo",
            "Japan"
        ]
    },
    {
        "name": "Ian Black",
        "gender": "male",
        "date_of_birth": "30-01-1987",
        "primary_contact": {
            "email": "ian.black@example.com",
            "phone": 4123456789
        },
        "address": [
            "Sydney",
            "Australia"
        ]
    },
    {
        "name": "Jessica Adams",
        "gender": "female",
        "date_of_birth": "05-11-1991",
        "primary_contact": {
            "email": "jessica.adams@example.com",
            "phone": 3890123456
        },
        "address": [
            "Dubai",
            "UAE"
        ]
    },
    {
        "name": "Kevin Lewis",
        "gender": "male",
        "date_of_birth": "28-07-1998",
        "primary_contact": {
            "email": "kevin.lewis@example.com",
            "phone": 2789012345
        },
        "address": [
            "Mumbai",
            "India"
        ]
    },
    {
        "name": "Laura Scott",
        "gender": "female",
        "date_of_birth": "19-03-1997",
        "primary_contact": {
            "email": "laura.scott@example.com",
            "phone": 1678901234
        },
        "address": [
            "Singapore",
            "Singapore"
        ]
    },
    {
        "name": "Michael Clark",
        "gender": "male",
        "date_of_birth": "07-12-1989",
        "primary_contact": {
            "email": "michael.clark@example.com",
            "phone": 9870123456
        },
        "address": [
            "Bangkok",
            "Thailand"
        ]
    },
    {
        "name": "Nancy Hall",
        "gender": "female",
        "date_of_birth": "23-02-1986",
        "primary_contact": {
            "email": "nancy.hall@example.com",
            "phone": 8765012345
        },
        "address": [
            "Seoul",
            "South Korea"
        ]
    },
    {
        "name": "Oscar Young",
        "gender": "male",
        "date_of_birth": "01-10-1990",
        "primary_contact": {
            "email": "oscar.young@example.com",
            "phone": 7654321098
        },
        "address": [
            "Mexico City",
            "Mexico"
        ]
    }
])

// One to Many Relationship
// 1 : Few | 1 : Many | 1 : Too Many
// for one to few relationship the most common approach is to use embeded documents
// example ==> customer has many saved addresses (few saved addresses)
// when to use one to few relationship we assume that the related data not be more than 5
// and also the related data will be unique for each parent document

//  1 : Many
// for one to many relationship we assume that the related data not be more than 10 documents
// the related data will be unique for each parent document

// example order with products ==> each order have many products
// we should not use embeding in this case because
// 1- Related Data size ==> the size of the related data will be exceeded the overall
// for the parent document
// 2- Data redundency ==> many orders has the same product purchages
// 3- Frequency of read and write ==> this data is may be updated or read more
// in this case the referencing is more good than embeding

// 1 : too many ===> use referencing
// exmple product has many reviews

// many to many relationship ==> we always use referencing

// types of referencing
// 1- Parent Referencing
// 2- Child Referencing
// 3- Two way referencing


// child referencing ==> in the parent document we storing the document id for the child document
// problem ==> parent and child is tightly coupled 
// we can use this approach when have 1 : few relationship


// Parent Referencing ==> the child document is storing a reference of the parent document
// This is good
// the parent and child are very loosly coupled to each other
// This is good for 1: Many or 1 : too many relationships

// Two way referencing (used with many to many relationship)
// The parent document is storing a reference of the child documents
// and the child document is storinf a reference of parent documents

db.products.insertMany([
    {
        "name": "iPhone 15 Pro Max",
        "brand": "Apple",
        "price": 1299,
        "details": {
            "model": "A2993",
            "color": "Space Black",
            "release_year": 2023
        }
    },
    {
        "name": "Samsung Galaxy S24 Ultra",
        "brand": "Samsung",
        "price": 1199,
        "details": {
            "model": "SM-S928U",
            "color": "Titanium Gray",
            "release_year": 2024
        }
    },
    {
        "name": "Google Pixel 8 Pro",
        "brand": "Google",
        "price": 999,
        "details": {
            "model": "G6GPR",
            "color": "Obsidian",
            "release_year": 2023
        }
    },
    {
        "name": "OnePlus 12",
        "brand": "OnePlus",
        "price": 799,
        "details": {
            "model": "LE2300",
            "color": "Silky Black",
            "release_year": 2024
        }
    },
    {
        "name": "Xiaomi 14 Pro",
        "brand": "Xiaomi",
        "price": 899,
        "details": {
            "model": "23127PN0CC",
            "color": "White Marble",
            "release_year": 2024
        }
    },
    {
        "name": "Huawei P60 Pro",
        "brand": "Huawei",
        "price": 1099,
        "details": {
            "model": "VOG-AL60",
            "color": "Emerald Green",
            "release_year": 2023
        }
    },
    {
        "name": "Sony Xperia 1 V",
        "brand": "Sony",
        "price": 1299,
        "details": {
            "model": "XQ-DQ72",
            "color": "Black",
            "release_year": 2023
        }
    },
    {
        "name": "Oppo Find X7 Ultra",
        "brand": "Oppo",
        "price": 999,
        "details": {
            "model": "PHZ110",
            "color": "Ocean Blue",
            "release_year": 2024
        }
    },
    {
        "name": "Vivo X100 Pro",
        "brand": "Vivo",
        "price": 899,
        "details": {
            "model": "V2333A",
            "color": "Sunset Orange",
            "release_year": 2024
        }
    },
    {
        "name": "Nokia 9.4 PureView",
        "brand": "Nokia",
        "price": 799,
        "details": {
            "model": "TA-1296",
            "color": "Midnight Blue",
            "release_year": 2023
        }
    },
    {
        "name": "LG Velvet 3",
        "brand": "LG",
        "price": 699,
        "details": {
            "model": "LM-G915",
            "color": "Aurora Gray",
            "release_year": 2024
        }
    },
    {
        "name": "Motorola Edge 50 Ultra",
        "brand": "Motorola",
        "price": 749,
        "details": {
            "model": "XT2401-2",
            "color": "Peach Fuzz",
            "release_year": 2025
        }
    },
    {
        "name": "Realme GT 6",
        "brand": "Realme",
        "price": 599,
        "details": {
            "model": "RMX3830",
            "color": "Silver",
            "release_year": 2024
        }
    },
    {
        "name": "Asus ROG Phone 8",
        "brand": "Asus",
        "price": 1099,
        "details": {
            "model": "ZS590KS",
            "color": "Phantom Black",
            "release_year": 2024
        }
    },
    {
        "name": "ZTE Axon 60 Ultra",
        "brand": "ZTE",
        "price": 799,
        "details": {
            "model": "A2322",
            "color": "Cosmic Silver",
            "release_year": 2024
        }
    },
    {
        "name": "iPhone 14 Pro",
        "brand": "Apple",
        "price": 1099,
        "details": {
            "model": "A2881",
            "color": "Deep Purple",
            "release_year": 2022
        }
    },
    {
        "name": "Samsung Galaxy Z Fold 5",
        "brand": "Samsung",
        "price": 1799,
        "details": {
            "model": "SM-F946U",
            "color": "Cream",
            "release_year": 2023
        }
    },
    {
        "name": "Google Pixel 7 Pro",
        "brand": "Google",
        "price": 899,
        "details": {
            "model": "GP4BC",
            "color": "Coral",
            "release_year": 2022
        }
    },
    {
        "name": "OnePlus 11",
        "brand": "OnePlus",
        "price": 699,
        "details": {
            "model": "LE2125",
            "color": "Emerald Forest",
            "release_year": 2023
        }
    },
    {
        "name": "Xiaomi 13 Pro",
        "brand": "Xiaomi",
        "price": 799,
        "details": {
            "model": "2210132G",
            "color": "Ceramic White",
            "release_year": 2023
        }
    },
    {
        "name": "Huawei Mate 60 Pro",
        "brand": "Huawei",
        "price": 1199,
        "details": {
            "model": "ALP-AL80",
            "color": "Black",
            "release_year": 2023
        }
    },
    {
        "name": "Sony Xperia 5 V",
        "brand": "Sony",
        "price": 999,
        "details": {
            "model": "XQ-DQ54",
            "color": "Green",
            "release_year": 2023
        }
    },
    {
        "name": "Oppo Find N3",
        "brand": "Oppo",
        "price": 1699,
        "details": {
            "model": "CPH2437",
            "color": "Gold",
            "release_year": 2023
        }
    },
    {
        "name": "Vivo X90 Pro",
        "brand": "Vivo",
        "price": 849,
        "details": {
            "model": "V2227A",
            "color": "Red",
            "release_year": 2023
        }
    },
    {
        "name": "Nokia X30",
        "brand": "Nokia",
        "price": 599,
        "details": {
            "model": "TA-1412",
            "color": "Ocean Blue",
            "release_year": 2022
        }
    },
    {
        "name": "LG Wing 2",
        "brand": "LG",
        "price": 799,
        "details": {
            "model": "LM-F200",
            "color": "Illusion Sky",
            "release_year": 2023
        }
    },
    {
        "name": "Motorola Razr 40 Ultra",
        "brand": "Motorola",
        "price": 999,
        "details": {
            "model": "XT2305-1",
            "color": "Viva Magenta",
            "release_year": 2023
        }
    },
    {
        "name": "Realme Narzo 60 Pro",
        "brand": "Realme",
        "price": 499,
        "details": {
            "model": "RMX3750",
            "color": "Cosmic Black",
            "release_year": 2023
        }
    },
    {
        "name": "Asus Zenfone 10",
        "brand": "Asus",
        "price": 699,
        "details": {
            "model": "AI2201",
            "color": "Midnight Black",
            "release_year": 2023
        }
    },
    {
        "name": "ZTE Nubia Z60 Ultra",
        "brand": "ZTE",
        "price": 749,
        "details": {
            "model": "NX729J",
            "color": "Black Gold",
            "release_year": 2024
        }
    },
    {
        "name": "iPhone 16 Pro",
        "brand": "Apple",
        "price": 1399,
        "details": {
            "model": "A3104",
            "color": "Titanium Blue",
            "release_year": 2024
        }
    },
    {
        "name": "Samsung Galaxy A55",
        "brand": "Samsung",
        "price": 449,
        "details": {
            "model": "SM-A556U",
            "color": "Awesome Lilac",
            "release_year": 2024
        }
    },
    {
        "name": "Google Pixel 9",
        "brand": "Google",
        "price": 799,
        "details": {
            "model": "GYZ8X",
            "color": "Porcelain",
            "release_year": 2024
        }
    },
    {
        "name": "OnePlus Nord 4",
        "brand": "OnePlus",
        "price": 499,
        "details": {
            "model": "DN2401",
            "color": "Mercurial Silver",
            "release_year": 2024
        }
    },
    {
        "name": "Xiaomi Redmi Note 13 Pro",
        "brand": "Xiaomi",
        "price": 399,
        "details": {
            "model": "2312DRA50G",
            "color": "Arctic White",
            "release_year": 2024
        }
    },
    {
        "name": "Huawei Nova 12 Pro",
        "brand": "Huawei",
        "price": 599,
        "details": {
            "model": "NOA-AL50",
            "color": "Sakura Pink",
            "release_year": 2024
        }
    },
    {
        "name": "Sony Xperia 10 V",
        "brand": "Sony",
        "price": 499,
        "details": {
            "model": "XQ-DC72",
            "color": "Mint",
            "release_year": 2023
        }
    },
    {
        "name": "Oppo Reno 11 Pro",
        "brand": "Oppo",
        "price": 649,
        "details": {
            "model": "PHQ110",
            "color": "Sunrise Gold",
            "release_year": 2024
        }
    },
    {
        "name": "Vivo Y100",
        "brand": "Vivo",
        "price": 299,
        "details": {
            "model": "V2309",
            "color": "Metallic Blue",
            "release_year": 2023
        }
    },
    {
        "name": "Nokia G60",
        "brand": "Nokia",
        "price": 349,
        "details": {
            "model": "TA-1477",
            "color": "Ice Gray",
            "release_year": 2022
        }
    },
    {
        "name": "LG G8X ThinQ",
        "brand": "LG",
        "price": 599,
        "details": {
            "model": "LM-G850",
            "color": "Aurora Black",
            "release_year": 2023
        }
    },
    {
        "name": "Motorola Moto G Power 5G",
        "brand": "Motorola",
        "price": 199,
        "details": {
            "model": "XT2315-1",
            "color": "Mineral Black",
            "release_year": 2024
        }
    },
    {
        "name": "Realme C65",
        "brand": "Realme",
        "price": 199,
        "details": {
            "model": "RMX3841",
            "color": "Glowing Green",
            "release_year": 2024
        }
    },
    {
        "name": "Asus Zenfone 9",
        "brand": "Asus",
        "price": 599,
        "details": {
            "model": "AI2202",
            "color": "Starry White",
            "release_year": 2022
        }
    },
    {
        "name": "ZTE Blade V50",
        "brand": "ZTE",
        "price": 249,
        "details": {
            "model": "V2024A",
            "color": "Gradient Purple",
            "release_year": 2023
        }
    },
    {
        "name": "iPhone SE (3rd Gen)",
        "brand": "Apple",
        "price": 429,
        "details": {
            "model": "A2783",
            "color": "Midnight",
            "release_year": 2022
        }
    },
    {
        "name": "Samsung Galaxy S23",
        "brand": "Samsung",
        "price": 799,
        "details": {
            "model": "SM-S911U",
            "color": "Phantom Black",
            "release_year": 2023
        }
    },
    {
        "name": "Google Pixel 6a",
        "brand": "Google",
        "price": 449,
        "details": {
            "model": "GA02098",
            "color": "Sage",
            "release_year": 2022
        }
    },
    {
        "name": "OnePlus Ace 3",
        "brand": "OnePlus",
        "price": 599,
        "details": {
            "model": "PHB110",
            "color": "Jade Green",
            "release_year": 2024
        }
    },
    {
        "name": "Xiaomi 12T Pro",
        "brand": "Xiaomi",
        "price": 649,
        "details": {
            "model": "2201122G",
            "color": "Silver",
            "release_year": 2022
        }
    }
])

db.orders.insertMany([
    {
        "_id": ObjectId('673b5f9471bf64a76286bb1d'),
        "user_id": ObjectId('67c412483b8bf2f9854d7942'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb1f'),
            ObjectId('673b5f9471bf64a76286bb20')
        ],
        "order_date": { "$date": "2024-05-12T10:30:00Z" },
        "total_amount": 2298,
        "status": "delivered"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb21'),
        "user_id": ObjectId('67c412483b8bf2f9854d7943'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb23')
        ],
        "order_date": { "$date": "2024-08-15T14:20:00Z" },
        "total_amount": 1199,
        "status": "shipped"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb24'),
        "user_id": ObjectId('67c412483b8bf2f9854d7944'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb26'),
            ObjectId('673b5f9471bf64a76286bb27')
        ],
        "order_date": { "$date": "2024-03-20T09:15:00Z" },
        "total_amount": 1698,
        "status": "delivered"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb28'),
        "user_id": ObjectId('67c412483b8bf2f9854d7945'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb2a')
        ],
        "order_date": { "$date": "2024-11-10T16:45:00Z" },
        "total_amount": 1099,
        "status": "processing"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb2b'),
        "user_id": ObjectId('67c412483b8bf2f9854d7946'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb2d'),
            ObjectId('673b5f9471bf64a76286bb2e')
        ],
        "order_date": { "$date": "2025-01-25T12:00:00Z" },
        "total_amount": 2298,
        "status": "delivered"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb2f'),
        "user_id": ObjectId('67c412483b8bf2f9854d7947'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb31'),
            ObjectId('673b5f9471bf64a76286bb32')
        ],
        "order_date": { "$date": "2024-07-18T15:10:00Z" },
        "total_amount": 1698,
        "status": "shipped"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb33'),
        "user_id": ObjectId('67c412483b8bf2f9854d7948'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb35')
        ],
        "order_date": { "$date": "2024-09-05T11:25:00Z" },
        "total_amount": 699,
        "status": "delivered"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb36'),
        "user_id": ObjectId('67c412483b8bf2f9854d7949'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb38'),
            ObjectId('673b5f9471bf64a76286bb39')
        ],
        "order_date": { "$date": "2025-02-10T09:00:00Z" },
        "total_amount": 1348,
        "status": "processing"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb3a'),
        "user_id": ObjectId('67c412483b8bf2f9854d794a'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb3c')
        ],
        "order_date": { "$date": "2024-06-22T13:45:00Z" },
        "total_amount": 1099,
        "status": "delivered"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb3d'),
        "user_id": ObjectId('67c412483b8bf2f9854d794b'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb3f'),
            ObjectId('673b5f9471bf64a76286bb40')
        ],
        "order_date": { "$date": "2024-12-01T14:30:00Z" },
        "total_amount": 1898,
        "status": "shipped"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb41'),
        "user_id": ObjectId('67c412483b8bf2f9854d794c'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb43')
        ],
        "order_date": { "$date": "2024-04-15T10:00:00Z" },
        "total_amount": 1799,
        "status": "delivered"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb44'),
        "user_id": ObjectId('67c412483b8bf2f9854d794d'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb46'),
            ObjectId('673b5f9471bf64a76286bb47')
        ],
        "order_date": { "$date": "2025-03-02T11:15:00Z" },
        "total_amount": 1598,
        "status": "processing"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb48'),
        "user_id": ObjectId('67c412483b8bf2f9854d794e'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb4a'),
            ObjectId('673b5f9471bf64a76286bb4b')
        ],
        "order_date": { "$date": "2024-10-20T16:00:00Z" },
        "total_amount": 1998,
        "status": "shipped"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb4c'),
        "user_id": ObjectId('67c412483b8bf2f9854d794f'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb4e')
        ],
        "order_date": { "$date": "2024-02-28T09:30:00Z" },
        "total_amount": 999,
        "status": "delivered"
    },
    {
        "_id": ObjectId('673b5f9471bf64a76286bb4f'),
        "user_id": ObjectId('67c412483b8bf2f9854d7950'),
        "products": [
            ObjectId('673b5f9471bf64a76286bb51'),
            ObjectId('673b5f9471bf64a76286bb52'),
            ObjectId('673b5f9471bf64a76286bb53')
        ],
        "order_date": { "$date": "2025-03-01T13:20:00Z" },
        "total_amount": 3147,
        "status": "processing"
    }
])

// get the first order
db.orders.findOne({})

// get the order ObjectId('673b5f9471bf64a76286bb1d')
db.orders.findOne({ _id: ObjectId('673b5f9471bf64a76286bb1d') })

// to get the related data form multiple collections
// using the aggregate (lookup) like joining tables in sql

db.orders.aggregate({
    $lookup: {
        from: 'users',
        localField: 'user_id',
        foreignField: '_id',
        as: 'customer_info'
    }
})


db.orders.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'user_id',
            foreignField: '_id',
            as: 'customer_info'
        }
    },
    {
        $lookup: {
            from: "products",
            localField: "products",
            foreignField: "_id",
            as: "product_details"
        }
    }
])




// MongoDB is designed for flexibility and scalability, storing data in BSON (Binary JSON) documents
//  within collections. Unlike relational databases, MongoDB does not enforce strict relationships or
//   foreign keys, but you can establish relationships between collections through references
//    (e.g., using ObjectId values). To "join" data, you typically use the aggregation framework,
//     which allows you to process and combine data from multiple collections.

// The most common way to perform joins in MongoDB is with the $lookup operator, which performs
//  a left outer join between two collections. This is similar to a LEFT JOIN in SQL, 
//  where all documents from the "from" collection are returned, 
//  and matching documents from the "local" collection are included.


// The $lookup stage in the MongoDB aggregation pipeline allows you to join two 
// collections based on a common field (e.g., an ObjectId reference).
//  Here’s a breakdown of its components:

// {
//     $lookup: {
//       from: "<collection_to_join>",
//       localField: "<field_from_the_input_documents>",
//       foreignField: "<field_from_the_target_collection>",
//       as: "<output_array_name>"
//     }
//   }

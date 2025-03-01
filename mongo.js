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
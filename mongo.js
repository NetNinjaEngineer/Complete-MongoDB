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


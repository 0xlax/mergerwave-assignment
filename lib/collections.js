Roles = new Mongo.Collection('roles');
Roles.insert({ name: 'admin' });
Roles.insert({ name: 'borrower' });
Roles.insert({ name: 'lender' });

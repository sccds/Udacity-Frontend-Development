
function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;

    setTimeout(function() {
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
};

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(num) {
    return this.contacts[num];
};

AddressBook.prototype.deleteContact = function(num) {
    this.contacts.splice(num, 1);
};
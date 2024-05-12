/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    
    const emailSet = new Set();
    
    const filteringEmails = (email) => {
    const localName = email.split('@')[0], domainName = email.split('@')[1];
    const passingPlusLocalName = localName.split('+')[0];
    const mergingLocalName = passingPlusLocalName.split('.').join('');
    
    return mergingLocalName + '@' + domainName;
    }
    
    for(const email of emails) {
        emailSet.add(filteringEmails(email));
    }
    return emailSet.size;
};
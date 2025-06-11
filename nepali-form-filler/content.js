// Nepali Form Filler - Content Script
// This script runs on web pages to fill forms with Nepali-style data in English format

// =============================================
// NEPALI DATA REPOSITORY (English format)
// =============================================

const nepaliData = {
  // Names data
  names: {
    maleFirstNames: [
      "Sujan", "Ramesh", "Ajay", "Bikash", "Santosh", "Niraj", "Pradeep", "Bipin", "Sagar", "Amit",
      "Bikram", "Deepak", "Ganesh", "Hari", "Krishna", "Manoj", "Nabin", "Prakash", "Rajesh", "Suresh",
      "Anil", "Bishal", "Dinesh", "Gopal", "Kumar", "Lal", "Mohan", "Narayan", "Pramod", "Rabin"
    ],
    femaleFirstNames: [
      "Sujana", "Sarita", "Anjana", "Pushpa", "Sabina", "Manju", "Reena", "Suman", "Sushma", "Anita",
      "Bina", "Chhaya", "Gita", "Jamuna", "Kusum", "Laxmi", "Mina", "Nirmala", "Puja", "Rita",
      "Alina", "Babita", "Chandra", "Dipika", "Goma", "Kabita", "Mamata", "Pabitra", "Sabita", "Usha"
    ],
    middleNames: ["Kumar", "Bahadur", "Prasad", "Raj", "Mani", "Lal", "Chandra", "Devi", "Maya", ""],
    lastNames: [
      "Poudel", "Adhikari", "Shrestha", "Nepali", "Kafle", "Rana", "Thapa", "Gurung", "Magar", "Tamang",
      "Acharya", "Bhattarai", "Dahal", "Giri", "Karki", "Lama", "Pandey", "Regmi", "Sharma", "Yadav",
      "Bhandari", "Chaulagain", "Dangol", "Ghimire", "Joshi", "Khadka", "Mishra", "Oli", "Rai", "Silwal"
    ]
  },

  // Address data
  addresses: {
    provinces: [
      "Province 1", "Madhesh Province", "Bagmati Province", "Gandaki Province",
      "Lumbini Province", "Karnali Province", "Sudurpaschim Province"
    ],
    districts: [
      "Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Chitwan", "Nawalparasi", "Kaski", "Morang", "Jhapa", "Sunsari",
      "Rupandehi", "Banke", "Bardiya", "Dang", "Kailali", "Kanchanpur", "Saptari", "Siraha", "Dhanusha", "Mahottari",
      "Sindhuli", "Makwanpur", "Parsa", "Bara", "Rautahat", "Sarlahi", "Sindhupalchok", "Dhading", "Nuwakot", "Rasuwa"
    ],
    municipalities: {
      "Kathmandu": ["Kathmandu", "Kirtipur", "Tokha", "Gokarneshwar", "Budhanilkantha", "Nagarjun", "Tarakeshwar"],
      "Lalitpur": ["Lalitpur", "Mahalaxmi", "Godawari", "Konjyosom", "Bagmati", "Lalitpur Metropolitan"],
      "Bhaktapur": ["Bhaktapur", "Madhyapur Thimi", "Suryabinayak", "Changunarayan"],
      "Pokhara": ["Pokhara", "Annapurna", "Machhapuchchhre", "Pokhara Metropolitan"],
      "Chitwan": ["Bharatpur", "Ratnanagar", "Kalika", "Khairhani", "Madi"],
      "Nawalparasi": ["Gaindakot", "Kawasoti", "Madhyabindu", "Ramgram"],
      "Kaski": ["Pokhara", "Annapurna", "Machhapuchchhre", "Pokhara Metropolitan"],
      "Morang": ["Biratnagar", "Sundar Haraincha", "Belbari", "Pathari", "Urlabari", "Rangeli"],
      "Jhapa": ["Birtamod", "Damak", "Mechinagar", "Arjundhara", "Gauradaha", "Kankai"]
    },
    streets: [
      "Main Road", "New Road", "Basantapur", "Thamel", "Durbarmarg", "Pulchowk", "Kupondole", "Baneshwor", "Gongabu", "Koteshwor",
      "Jawalakhel", "Patan", "Boudha", "Swayambhu", "Chabahil", "Gaushala", "Maitighar", "Tinkune", "Bhatbhateni", "Satdobato"
    ],
    wards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
  },

  // Financial data
  banks: {
    names: [
      "NIC Asia Bank", "Nabil Bank", "Himalayan Bank", "Global IME Bank", "Prabhu Bank", "NMB Bank",
      "Rastriya Banijya Bank", "Agriculture Development Bank", "Standard Chartered Bank Nepal", "Everest Bank",
      "Siddhartha Bank", "Machhapuchchhre Bank", "Kumari Bank", "Laxmi Bank", "Citizens Bank", "Prime Commercial Bank",
      "Sunrise Bank", "Sanima Bank", "Civil Bank", "Century Commercial Bank"
    ],
    branches: [
      "Kathmandu Main Branch", "Pokhara Branch", "Biratnagar Branch", "Birgunj Branch", "Lalitpur Branch",
      "Bhaktapur Branch", "Chitwan Branch", "Butwal Branch", "Nepalgunj Branch", "Dharan Branch"
    ]
  },

  // Professional data
  professions: {
    jobs: [
      "Accountant", "Administrator", "Agriculture Officer", "Architect", "Banker", "Business Owner", "Care Giver",
      "Cashier", "CEO", "Chairman", "Chef", "Civil Engineer", "Cleaner", "Computer Operator", "Consultant", "Cook",
      "Customer Service", "Dentist", "Doctor", "Driver", "Electrician", "Engineer", "Farmer", "Gardener", "Graphic Designer",
      "HR Manager", "IT Officer", "Journalist", "Lawyer", "Lecturer", "Manager", "Marketing Officer", "Nurse", "Office Assistant",
      "Pharmacist", "Plumber", "Police Officer", "Professor", "Receptionist", "Sales Executive", "Secretary", "Security Guard",
      "Social Worker", "Student", "Supervisor", "Teacher", "Technician", "Waiter"
    ],
    skills: [
      "Baby Care", "Housekeeping", "Maternity Care", "Old Age Care", "Receptionist", "Accountant", "Nursing Care",
      "Marketing", "Management", "Customer Service", "Cooking", "Driving", "Computer Skills", "Language Skills",
      "Carpentry", "Plumbing", "Electrical Work", "Teaching", "First Aid", "Gardening"
    ]
  },

  // =============================================
  // DATA GENERATION METHODS
  // =============================================

  // Name generation
  getFirstName: function(gender) {
    const names = gender === 'Female' ? this.names.femaleFirstNames : this.names.maleFirstNames;
    return names[Math.floor(Math.random() * names.length)];
  },

  getMiddleName: function() {
    return this.names.middleNames[Math.floor(Math.random() * this.names.middleNames.length)];
  },

  getLastName: function() {
    return this.names.lastNames[Math.floor(Math.random() * this.names.lastNames.length)];
  },

  getFullName: function(gender) {
    return `${this.getFirstName(gender)} ${this.getMiddleName()} ${this.getLastName()}`;
  },

  // Contact information
  getPhoneNumber: function() {
    return '98' + Math.floor(10000000 + Math.random() * 90000000);
  },

  getEmail: function(name) {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const cleanName = name.replace(/\s+/g, '.').toLowerCase();
    return `${cleanName}@${domains[Math.floor(Math.random() * domains.length)]}`;
  },

  // Date generation
  getCurrentDate: function() {
    const now = new Date();
    return `${(now.getMonth()+1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()}`;
  },

  getFutureDate: function(days) {
    const future = new Date();
    future.setDate(future.getDate() + days);
    return `${(future.getMonth()+1).toString().padStart(2, '0')}/${future.getDate().toString().padStart(2, '0')}/${future.getFullYear()}`;
  },

  getPastDate: function(years) {
    const past = new Date();
    past.setFullYear(past.getFullYear() - years);
    return `${(past.getMonth()+1).toString().padStart(2, '0')}/${past.getDate().toString().padStart(2, '0')}/${past.getFullYear()}`;
  },

  // Address generation
  getState: function() {
    return this.addresses.provinces[Math.floor(Math.random() * this.addresses.provinces.length)];
  },

  getDistrict: function() {
    return this.addresses.districts[Math.floor(Math.random() * this.addresses.districts.length)];
  },

  getMunicipality: function(district = null) {
    if (district && this.addresses.municipalities[district]) {
      const municipalities = this.addresses.municipalities[district];
      return municipalities[Math.floor(Math.random() * municipalities.length)];
    }
    // Fallback to random municipality if district not specified or not found
    const allMunicipalities = Object.values(this.addresses.municipalities).flat();
    return allMunicipalities[Math.floor(Math.random() * allMunicipalities.length)];
  },

  getWardNo: function() {
    return this.addresses.wards[Math.floor(Math.random() * this.addresses.wards.length)];
  },

  getAddressLine: function() {
    const street = this.addresses.streets[Math.floor(Math.random() * this.addresses.streets.length)];
    return `${Math.floor(Math.random() * 100) + 1} ${street}`;
  },

  getFullAddress: function() {
    const district = this.getDistrict();
    return {
      state: this.getState(),
      district: district,
      municipality: this.getMunicipality(district),
      ward: this.getWardNo(),
      street: this.getAddressLine()
    };
  },

  // Financial information
  getBankName: function() {
    return this.banks.names[Math.floor(Math.random() * this.banks.names.length)];
  },

  getBankBranch: function() {
    return this.banks.branches[Math.floor(Math.random() * this.banks.branches.length)];
  },

  getBankAccountNumber: function() {
    return Math.floor(1000000000000 + Math.random() * 9000000000000).toString().substring(0, 13);
  },

  // Professional information
  getProfession: function() {
    return this.professions.jobs[Math.floor(Math.random() * this.professions.jobs.length)];
  },

  getRandomSkill: function() {
    return this.professions.skills[Math.floor(Math.random() * this.professions.skills.length)];
  },

  getWorkExperience: function() {
    const experiences = ['1 month', '3 months', '6 months', '1 year', '2 years', '3 years', '5 years', '10 years'];
    return experiences[Math.floor(Math.random() * experiences.length)];
  },

  // Other fields
  getBloodGroup: function() {
    const groups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    return groups[Math.floor(Math.random() * groups.length)];
  },

  getRandomStatus: function() {
    const statuses = ['Pending', 'Approved', 'Rejected', 'Completed', 'In Progress', 'Active', 'Inactive'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }
};

// =============================================
// FORM FILLING LOGIC
// =============================================

function fillNepaliForm() {
  // Determine random gender for consistent data
  const gender = Math.random() > 0.5 ? 'Male' : 'Female';
  const fullName = nepaliData.getFullName(gender);
  const district = nepaliData.getDistrict();

  // Get all form elements
  const formElements = document.querySelectorAll('input, select, textarea');

  formElements.forEach(element => {
    const tagName = element.tagName.toLowerCase();
    const type = (element.type || '').toLowerCase(); // Ensure type exists
    const name = (element.name || '').toLowerCase();
    const id = (element.id || '').toLowerCase();
    const placeholder = (element.placeholder || '').toLowerCase();
    const label = (element.labels && element.labels.length > 0) ? element.labels[0].textContent.toLowerCase() : '';

    // Skip non-fillable or already filled elements (to prevent overwriting if run multiple times)
    if (type === 'hidden' || type === 'submit' || type === 'button' || type === 'reset' || type === 'file' || element.value !== '') {
      return;
    }

    // Combine identifying attributes for robust matching
    const identifyText = `${name} ${id} ${placeholder} ${label}`;

    // Fill based on field characteristics using combined identifier
    if (identifyText.includes('name')) {
      if (identifyText.includes('emergency')) {
        element.value = nepaliData.getFullName(gender);
      } else if (identifyText.includes('father')) {
        element.value = nepaliData.getFullName('Male');
      } else if (identifyText.includes('mother')) {
        element.value = nepaliData.getFullName('Female');
      } else if (identifyText.includes('grandfather')) {
        element.value = nepaliData.getFullName('Male');
      } else if (identifyText.includes('first')) {
        element.value = nepaliData.getFirstName(gender);
      } else if (identifyText.includes('middle')) {
        element.value = nepaliData.getMiddleName();
      } else if (identifyText.includes('last')) {
        element.value = nepaliData.getLastName();
      }
      else {
        element.value = fullName; // Default full name if not specific
      }
    }
    else if (identifyText.includes('phone') || identifyText.includes('mobile')) {
      element.value = nepaliData.getPhoneNumber();
    }
    else if (identifyText.includes('email')) {
      element.value = nepaliData.getEmail(fullName);
    }
    else if (identifyText.includes('date')) {
      if (identifyText.includes('birth')) {
        element.value = nepaliData.getPastDate(Math.floor(Math.random() * 42) + 18); // Age 18-60
      } else if (identifyText.includes('follow')) {
        element.value = nepaliData.getFutureDate(7);
      } else {
        element.value = nepaliData.getCurrentDate();
      }
    }
    else if (identifyText.includes('address')) {
      const address = nepaliData.getFullAddress();
      element.value = `${address.street}, Ward ${address.ward}, ${address.municipality}, ${address.district}`;
    }
    else if (identifyText.includes('district')) {
      // For select elements, try to match an option
      if (tagName === 'select') {
        const selectedDistrict = district; // Use the same random district
        for (let i = 0; i < element.options.length; i++) {
          if (element.options[i].value.toLowerCase().includes(selectedDistrict.toLowerCase()) ||
              element.options[i].text.toLowerCase().includes(selectedDistrict.toLowerCase())) {
            element.selectedIndex = i;
            break;
          }
        }
      } else {
        element.value = district;
      }
    }
    else if (identifyText.includes('municipality')) {
       // For select elements, try to match an option
      const selectedMunicipality = nepaliData.getMunicipality(district);
      if (tagName === 'select') {
        for (let i = 0; i < element.options.length; i++) {
          if (element.options[i].value.toLowerCase().includes(selectedMunicipality.toLowerCase()) ||
              element.options[i].text.toLowerCase().includes(selectedMunicipality.toLowerCase())) {
            element.selectedIndex = i;
            break;
          }
        }
      } else {
        element.value = selectedMunicipality;
      }
    }
    else if (identifyText.includes('ward')) {
      element.value = nepaliData.getWardNo();
    }
    else if (identifyText.includes('state') || identifyText.includes('province')) {
      // Similar select handling for state/province
      const selectedState = nepaliData.getState();
      if (tagName === 'select') {
        for (let i = 0; i < element.options.length; i++) {
          if (element.options[i].value.toLowerCase().includes(selectedState.toLowerCase()) ||
              element.options[i].text.toLowerCase().includes(selectedState.toLowerCase())) {
            element.selectedIndex = i;
            break;
          }
        }
      } else {
        element.value = selectedState;
      }
    }
    else if (identifyText.includes('gender')) {
      if (type === 'radio') {
        if (element.value.toLowerCase() === gender.toLowerCase()) {
          element.checked = true;
        }
      } else if (tagName === 'select') {
        for (let i = 0; i < element.options.length; i++) {
          if (element.options[i].value.toLowerCase() === gender.toLowerCase() ||
              element.options[i].text.toLowerCase() === gender.toLowerCase()) {
            element.selectedIndex = i;
            break;
          }
        }
      }
    }
    else if (identifyText.includes('blood')) {
      element.value = nepaliData.getBloodGroup();
    }
    else if (identifyText.includes('bank')) {
      if (identifyText.includes('account')) {
        element.value = nepaliData.getBankAccountNumber();
      } else if (identifyText.includes('name')) {
        element.value = nepaliData.getBankName();
      } else if (identifyText.includes('branch')) {
        element.value = nepaliData.getBankBranch();
      }
    }
    else if (identifyText.includes('experience')) {
      element.value = nepaliData.getWorkExperience();
    }
    else if (identifyText.includes('profession') || identifyText.includes('occupation') || identifyText.includes('job')) {
      element.value = nepaliData.getProfession();
    }
    else if (type === 'radio') {
      // For other radio buttons, randomly check one
      // Only check if it's the *first* in a group to avoid checking all of them
      const radioGroupName = element.name;
      const firstRadioInGroup = document.querySelector(`input[type="radio"][name="${radioGroupName}"]`);
      if (element === firstRadioInGroup) {
        // Randomly pick one from the group to check
        const allRadiosInGroup = document.querySelectorAll(`input[type="radio"][name="${radioGroupName}"]`);
        const randomIndex = Math.floor(Math.random() * allRadiosInGroup.length);
        allRadiosInGroup[randomIndex].checked = true;
      }
    }
    else if (type === 'checkbox') {
      element.checked = Math.random() > 0.5; // Randomly check
    }
    else if (tagName === 'select') {
      if (element.options.length > 1) {
        // Special handling for status fields
        if (identifyText.includes('status')) {
          const status = nepaliData.getRandomStatus();
          for (let i = 0; i < element.options.length; i++) {
            if (element.options[i].value.toLowerCase().includes(status.toLowerCase()) ||
                element.options[i].text.toLowerCase().includes(status.toLowerCase())) {
              element.selectedIndex = i;
              break;
            }
          }
        } else {
          // Random selection for other dropdowns, avoiding the first (often "Select...") option
          const startIndex = element.options[0].value === '' || element.options[0].text.toLowerCase().includes('select') ? 1 : 0;
          if (element.options.length > startIndex) {
            const randomIndex = Math.floor(Math.random() * (element.options.length - startIndex)) + startIndex;
            element.selectedIndex = randomIndex;
          }
        }
      }
    }
    else if (element.value === '') {
      // Fill generic text fields if still empty
      if (identifyText.includes('number')) {
        element.value = Math.floor(Math.random() * 1000);
      }
      else if (identifyText.includes('remark') || identifyText.includes('note') || identifyText.includes('description')) {
        element.value = 'Automatically filled text by Nepali Form Filler.';
      }
      else if (identifyText.includes('skill')) {
        element.value = nepaliData.getRandomSkill();
      }
      else {
        element.value = 'Sample text'; // Generic fallback for any other text input
      }
    }

    // Trigger change events to ensure frameworks react to filled values
    if (tagName === 'input' || tagName === 'textarea') {
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.dispatchEvent(new Event('change', { bubbles: true }));
    } else if (tagName === 'select') {
      element.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  console.log('Form filled with Nepali data!');
}

// =============================================
// EXTENSION COMMUNICATION
// =============================================

// Listen for messages from popup or background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fillForm') {
    fillNepaliForm(); // Call the form filling function
    sendResponse({status: 'success', message: 'Form filling initiated.'});
    return true; // Indicate that sendResponse will be called asynchronously
  }
});
exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',

    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['./spec/createAccount.spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,   // Use colors in the command line report.  
        //defaultTimeoutInterval: 3000   // Default time to wait in ms before a test fails.
    },
    params: {
        url: {
            BASEURL: 'http://automationpractice.com',
            SIGNINURL: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
            TWITTERURL: 'https://twitter.com/intent/tweet?text=Printed%20Summer%20Dress%20http://automationpractice.com/index.php?id_product=5&controller=product'
        },

        PRODUCT: {
            EXISTING_PRODUCT: 'DRESS',
            NON_EXISTING_PRODUCT: 'APPLE'
        },
        SORT: {
            LowFirst: 'Price: Lowest first',
            HighFirst: 'Price: Highest first',
            AtoZ: 'Product Name: A to Z',
            ZtoA: 'Product Name: Z to A',
            InStock: 'In stock',
            ASC: 'Reference: Lowest first',
            DSC: 'Reference: Highest first'
        },
        FRIEND_DETAILS: {
            NAME: 'Fatme',
            EMAIL: 'fatme@abc.com',
            SENT_MSG: 'Your e-mail has been sent successfully'
        },
        REGISTRATION_PAGE: {
            EMAIL: 'asda1@asda.com',
            FIRST_NAME: 'Cristal',
            LAST_NAME: 'Pala',
            PASSWORD: 'Qwerty@123',
            ADDRESS: ' 411, New Town',
            CITY: 'LONDON',
            ZIPCODE: '12345',
            MOBILE: '7023963214'
        },
        STATE: {
            A: 'Alabama',
            B: 'Indiana',
            C: 'Georgia'
        },
        COUNTRY: {
            A: 'United States'
        },
        ORDER_REFERENCE: {
            NO: '456123'
        },
        MSG: {
            TEXT: 'I like my order. Thank you :)'
        }

    }
};


forms.country = getCookie('_bb_country').toLowerCase() || null

var titleValueMap = {
      // TODO : add locale/language specific titles
      'country'          : forms.get('country'),
      'full name'        : forms.get('name.first') + ' ' + forms.get('name.last'),
      'address'          : forms.get('address.line1'),
      'extended address' : forms.get('address.line2'),
      'city'             : forms.get('address.city'),
      'state'            : forms.get('address.state'),
      'zip'              : forms.get('address.zip'),
      'email'            : forms.get('email'),
      'phone'            : forms.get('phone'),

      // take a list of titles and apply the basetitle value to each as a subprop of the map
      propagate : function (baseTitle, titleSet) {
        _.each(titleSet, function (newTitle) {
          titleValueMap[newTitle] = titleValueMap[baseTitle];
        });
      }
    }

// porpagate values to alternate titles

titleValueMap.propagate('city', ['town/city']);

titleValueMap.propagate('zip', ['zip code','zipcode', 'postal', 'postcode', 'post code']);

titleValueMap.propagate('email', ['email address', 'emailaddress']);

titleValueMap.propagate('phone', ['phone number']);
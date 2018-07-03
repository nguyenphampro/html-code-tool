(function () {
  'use strict';

  angular.module('app.generators.microdata')
  .controller('MicrodataAggregateOfferController', [function() {
    this.data = {
      brand: '',
      productName: '',
      productImage: '',
      description: '',
      productNumberType: 'upc',
      productNumber: '',
      currency: '',
      lowPrice: '',
      highPrice: '',
      condition: 'new'
    };

    this.elementHtml = function() {
      var html = '<div itemscope itemtype="http://schema.org/Product">';

      html += '\n    <span itemprop="brand">' + this.data.brand + '</span> - ';
      html += '\n    <span itemprop="name">' + this.data.productName + '</span><br>';
      html += '\n    <img itemprop="image" src="' + this.data.productImage + '"><br>';
      html += '\n    <span itemprop="description">' + this.data.description + '</span><br>';

      html += '\n    Product number: <span itemprop="productID" content="'
        + this.data.productNumberType + ':' + this.data.productNumber + '"></span><br>';

      html += '\n    <div itemprop="offers" itemscope itemtype="http://schema.org/AggregateOffer">';

      if (this.data.currency) {
        html += '\n        <span itemprop="priceCurrency" content="' + this.data.currency + '"></span>';
      }

      html += '\n        From ' + (this.data.lowPrice).charAt(0) + '<span itemprop="lowPrice">'
        + Number(this.data.lowPrice.replace(/[^0-9\.]+/g,"")).toFixed(2) + '</span><br>';

      if (this.data.highPrice) {
        html += '\n        to ' + (this.data.highPrice).charAt(0) + '<span itemprop="highPrice">'
          + Number(this.data.highPrice.replace(/[^0-9\.]+/g,"")).toFixed(2) + '</span><br>';
      }

      html += '\n        Condition: <span itemprop="itemCondition" content="'
        + this.data.condition + '">' + this.data.condition + '</span>';

      html += '\n    </div>';

      html += '\n</div>';

      return html;
    }
  }]);
})();

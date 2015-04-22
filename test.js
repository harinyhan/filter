/**
 * @file test
 * @author hanbingbing
 */

define(function (require, exports) {
    var data = require('common/data');
    var Filter = require('common/NewFilter');

    exports.init = function () {

        var filterInstance = new Filter({
            commonHandler: function () {
                $.get(
                    '/filterBws/test',
                    {
                        province: data.get('provinceId'),
                        country: data.get('countryId'),
                        category: data.get('categoryId')
                    },
                    function (response) {
                        if (response.status === 0) {
                            $('.main').html(response.data.tpl);
                            filterInstance.refresh();
                        }
                    },
                    'json'
                );
                console.log('common click');
            },
            specialHandler: {
                province: function () {
                    console.log('destination特殊处理');
                }
            }
        });
    };
});

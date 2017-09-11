/* feedreader.js
 * by Oleksii Babenko, Sept 4th 2017
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  This test loops through each feed in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('The URL is defined and it is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).not.toBeUndefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* This test loops through each feedin the allFeeds object and ensures it has a name defined
         * and that the name is not empty.*/

        it('The feed has name and it is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).not.toBeUndefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* A new test suite  */
    describe('The menu', function() {

        /* This test ensures the menu element is hidden by default. */

        it('The menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* This test ensures the menu changes visibility when the menu icon is clicked.*/

        it('Test visibility change when icon clicked', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    /* A new test suite. */
    describe('Initial Entries', function() {

        /* This test ensures when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.*/
    beforeEach(function(done) {
            loadFeed(0, function() {
                done();

     });
        });

        it('should be called and contain at least one feed.', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

     });

    /* A new test suite */
    describe('New Feed Selection', function() {
        /*  This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.*/
        var one;
        var two;

        beforeEach(function(done) {
            loadFeed(0, function() {
                one = $('.feed').html();
                done();
            });
        });

        it('Check if content is changed after loading feed', function(done) {
            loadFeed(1, function() {
                two = $('.feed').html();
                expect(two).not.toEqual(one);
                done();
            });
        });
    });
}());
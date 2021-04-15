export default {
    name: "TheAllUsersComponent",
    
    template: `
    <section class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1>This is the all users component!!</h1>
            </div>
        </div>
    </section>
    `,

    created: function() {
        console.log('all users component is ready');
    }
}
<template>
  <section id="contact" class="section-padding">
    <div class="container">
      <div class="row">
        <!-- SECTION HEADER -->
        <div class="fn-section-header contact-header">
          <h2 class="section-title text-center">Contact with us</h2>
          <p class="text-center">Cullen solves a Chinese labor strike in the wake of violence.</p>
        </div>
        <!-- / END SECTION HEADER -->
        <!-- GOOGLE MAP START -->
        <div class="col-md-6">
          <div id="google-map">
            <div id="map-canvas" class="wow animated fadeInUp"></div>
          </div>
        </div>
        <!-- / END GOOGLE MAP -->
        <div class="col-md-6">
          <div class="contact-form">
            <form action="sendemail.php" id="contactus" method="post" class="form">
              <div class="row">
                <div class="col-xs-6 col-md-6 form-group">
                  <input
                    class="form-control"
                    id="name"
                    name="cf_name"
                    placeholder="Name"
                    type="text"
                    required
                  >
                </div>
                <div class="col-xs-6 col-md-6 form-group">
                  <input
                    class="form-control"
                    id="email"
                    name="cf_email"
                    placeholder="Email"
                    type="email"
                    required
                  >
                </div>
              </div>
              <textarea
                class="form-control"
                id="message"
                name="cf_message"
                placeholder="Message"
                rows="5"
              ></textarea>
              <div class="row">
                <div class="col-xs-12 col-md-12">
                  <button class="btn btn btn-lg" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
</style>

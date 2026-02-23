import List "mo:core/List";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Migration "migration";

// Apply migration with "with" clause
(with migration = Migration.run)
actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
  };

  let inquiries = List.empty<Inquiry>();

  // Validate empty fields and phone length
  func validateContactForm(name : Text, phone : Text, email : Text, message : Text) {
    if (name.isEmpty() or phone.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields are required");
    };

    if (phone.size() != 10) {
      Runtime.trap("Phone number must be 10 digits");
    };
  };

  // Add phone field to form
  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, email : Text, message : Text) : async () {
    validateContactForm(name, phone, email, message);

    let inquiry : Inquiry = { name; phone; email; message };
    inquiries.add(inquiry);
  };
};

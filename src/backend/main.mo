import List "mo:core/List";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    message : Text;
  };

  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields are required");
    };

    let inquiry : Inquiry = { name; email; message };
    inquiries.add(inquiry);
  };
};

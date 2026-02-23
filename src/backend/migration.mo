import List "mo:core/List";
import Text "mo:core/Text";

module {
  type OldInquiry = {
    name : Text;
    email : Text;
    message : Text;
  };

  type OldActor = {
    inquiries : List.List<OldInquiry>;
  };

  type NewInquiry = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
  };

  type NewActor = {
    inquiries : List.List<NewInquiry>;
  };

  // Map old inquiries to include phone field with default empty value
  public func run(old : OldActor) : NewActor {
    let newInquiries = old.inquiries.map<OldInquiry, NewInquiry>(
      func(oldInquiry) {
        { oldInquiry with phone = "" };
      }
    );
    { inquiries = newInquiries };
  };
};

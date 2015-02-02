FactoryGirl.define do  factory :flight do
    flight_number "MyString"
plane_id "MyString"
date "2015-02-02 16:17:50"
origin "MyString"
destination "MyString"
  end
  factory :flight_number do
    plane_id "MyString"
date "2015-02-02 16:16:10"
origin "MyString"
destination "MyString"
  end

  factory :plane do
    sequence(:name) { |n| "JQ7#{n}" }
    rows 20
    columns 6
  end
end

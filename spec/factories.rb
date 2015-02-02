FactoryGirl.define do  factory :flight do
    flight_number "MyString"
date "2015-02-02 16:12:48"
origin "MyString"
destination "MyString"
plane_id 1
  end

  factory :plane do
    sequence(:name) { |n| "JQ7#{n}" }
    rows 20
    columns 6
  end
end
